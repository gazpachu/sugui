import debounce from 'lodash-es/debounce';

const isDesktop = window.innerWidth > 768;

const onResize = (callback) => {
  window.onresize = debounce(() => callback(window.innerWidth > 768), 500);
};

const handleEscKey = (evt, callback) => {
  let isEscape = false;

  if ('key' in evt) {
    isEscape = (evt.key === 'Escape' || evt.key === 'Esc');
  } else {
    isEscape = (evt.keyCode === 27);
  }

  if (isEscape) {
    callback();
  }
};

const slugify = text =>
  text.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text

const camelize = str =>
  str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
    if (index === 0) return letter.toLowerCase();
    return letter.toUpperCase();
  }).replace(/\s+/g, '');

const classify = (text) => {
  if (!text || text.length < 2) return '';

  return text.toString().toLowerCase().substring(1)
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/\//g, ' ') // Replace slashes with spaces
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

const helpers = {
  onResize,
  isDesktop,
  handleEscKey,
  slugify,
  camelize,
  classify
};

export default helpers;
