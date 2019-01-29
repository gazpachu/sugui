A Overlay component is very similar to the Dialog component. It is a full screen black overlay with a heading, close button and a space to place some content, like a search input or a form.

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/src/components/overlay/index.jsx" target="_blank">component implementation</a>

```jsx
const { default: styled, css } = require('styled-components');

const initialState = { open: null, open2: null, open3: null }

const StyledButton = styled(Button)`
  margin-right: 20px;
  display: inline-block;
`;

const StyledAccordion = styled(Accordion)`
  overflow-y: auto;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  overflow-y: auto;
`;

;<div>
  <StyledButton
    color="primary"
    onClick={() => setState({ open: true })}
  >
    Simple overlay
  </StyledButton>
  <StyledButton
    color="primary"
    onClick={() => setState({ open2: true })}
  >
    Overlay with accordion
  </StyledButton>
  <StyledButton
    color="primary"
    onClick={() => setState({ open3: true })}
  >
    Overlay with paper
  </StyledButton>
  <Overlay
    open={state.open}
    heading="Simple overlay"
    onClose={() => setState({ open: false })}
    topOffset={0}
  >
    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, sapien id euismod suscipit, felis massa gravida lorem, a lacinia ipsum ipsum a neque. Cras nec pulvinar ligula. Pellentesque sollicitudin, nibh non ultricies ultrices, nulla eros tristique ligula, quis bibendum metus quam congue diam. Aenean tincidunt, purus eu mattis aliquam, mauris elit rhoncus lectus, at venenatis diam urna at turpis. Nam tempor, nisl et dignissim finibus, leo diam scelerisque est, eget rutrum risus sapien quis massa. Praesent condimentum ex vitae tincidunt eleifend. Nunc vehicula tellus ut nisi laoreet vulputate. Fusce luctus dui eu scelerisque euismod. Quisque aliquet lorem egestas elit faucibus commodo. In dictum at lectus ac auctor.</p>
  </Overlay>
  <Overlay
    open={state.open2}
    heading="Overlay with accordion"
    onClose={() => setState({ open2: false })}
    topOffset={0}
  >
    <StyledAccordion title="Just a test">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna tortor, ornare ac nisl quis, sollicitudin placerat augue. Nulla facilisi. Integer rhoncus mollis ligula, varius convallis nisl porta sit amet. Aenean semper, justo non finibus congue, ex sem vestibulum quam, posuere fermentum turpis elit nec neque. Nullam a ornare neque. In eu rhoncus sem. Nunc ultrices dignissim neque a faucibus. Praesent purus felis, commodo et velit in, semper elementum erat. Quisque convallis congue lobortis. Nam tellus lectus, blandit vitae condimentum at, pellentesque vel est.</p>

      <p>Mauris laoreet leo ut ex ornare dictum at nec nisl. Mauris placerat mi a lacinia facilisis. Donec rhoncus leo vitae gravida rutrum. Sed posuere placerat lorem, non ultrices quam rutrum at. Proin iaculis aliquam erat. Proin mattis, est in volutpat efficitur, nunc lacus hendrerit neque, vel venenatis eros sapien eu tortor. Nullam vel lectus quam. Integer gravida, dolor vitae egestas placerat, augue enim egestas ex, ac lobortis turpis purus a tortor. Aliquam rhoncus cursus dui, nec rutrum quam blandit id.</p>

      <p>Fusce ac sodales enim. Vivamus sit amet nisi ante. Donec maximus tincidunt sem ac aliquam. Phasellus placerat dapibus massa, a luctus enim. Donec enim purus, gravida sed risus id, consectetur venenatis sapien. Mauris eu sapien urna. Cras in sem libero. Aenean eu nibh non ante tincidunt vulputate vel et ante. Proin euismod tempus massa, eu tempor risus sodales in. Duis vitae eros feugiat, tristique ligula nec, cursus sem. Vestibulum elementum viverra justo.</p>

      <p>Sed a pharetra justo. Pellentesque libero nibh, interdum vulputate pellentesque ut, blandit in turpis. Sed lacinia lacus in aliquet finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ac leo vel tellus sagittis finibus. Phasellus et nisi nisl. Phasellus quis nunc sagittis, faucibus mauris condimentum, euismod nisl. Mauris maximus egestas facilisis. Praesent lobortis elementum elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

      <p>Pellentesque mauris nulla, posuere in porttitor non, accumsan vestibulum mi. Nullam ligula augue, venenatis sed dapibus ut, consectetur at ex. Sed semper interdum nibh ac tincidunt. Sed id dapibus turpis. Aenean accumsan semper metus id auctor. Suspendisse posuere ex nibh, placerat ultrices sapien ullamcorper et. Sed et erat in velit dictum sollicitudin.</p>

      <p>Duis aliquet ligula euismod leo pretium, a varius purus dapibus. Suspendisse sagittis turpis sit amet ex luctus porttitor. Sed volutpat tortor vel urna suscipit dignissim. Proin nec dui massa. In dolor nisl, pretium at porta vel, dignissim et lectus. Aliquam placerat, lectus eget dapibus commodo, velit mi cursus lorem, nec volutpat metus urna molestie mauris. Phasellus a libero mi. Praesent leo sapien, ullamcorper in posuere vel, semper eu risus. Integer ut sagittis ante. Aliquam molestie velit at mauris dapibus, ut tempor sem convallis. Praesent ipsum lacus, elementum sollicitudin vehicula quis, lobortis et justo. Praesent cursus dui quis tortor iaculis malesuada.</p>

      <p>Aliquam at ultrices eros. Praesent eu velit in augue convallis sollicitudin. Suspendisse potenti. Nullam imperdiet in est in finibus. Mauris enim mi, tempus et varius non, fermentum quis felis. Proin mollis odio eros, sed faucibus leo imperdiet vel. Mauris in tempus ex. Aliquam condimentum vulputate est, et posuere leo tempor quis. Mauris vulputate vestibulum hendrerit. Duis consectetur ornare metus, bibendum bibendum neque facilisis eu. Quisque a velit ut nisi tempor feugiat.</p>

      <p>Mauris pellentesque arcu sit amet ex auctor, sed fringilla nibh cursus. Curabitur diam dolor, rutrum a neque vel, molestie maximus diam. Donec maximus odio nec velit pellentesque, vitae volutpat lacus rhoncus. Donec porttitor libero tempus leo placerat, sed scelerisque neque blandit. Sed nunc sem, tempor non semper eget, varius eu urna. Aliquam a nisl lacinia, finibus urna at, accumsan arcu. Nulla non purus tristique, varius ex sed, viverra quam. Fusce enim sem, vestibulum ut nunc ac, ultrices venenatis magna. Proin sagittis, magna porttitor facilisis varius, tellus tortor egestas velit, ac ultrices erat leo et sem. Sed augue nisi, laoreet id risus id, efficitur vestibulum nulla. Proin nec neque eget magna condimentum porttitor. Aliquam mi nibh, tristique quis consequat sit amet, sagittis ut diam. Suspendisse eget lorem vitae purus auctor tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>

      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec non lobortis erat. Nulla semper elit quis dui cursus maximus. Fusce orci leo, consectetur vel nisi ac, efficitur congue dui. Nulla suscipit dictum justo, eu accumsan purus congue quis. Vivamus ac pretium ex. Vivamus eu nisl sem. Donec non purus ut libero interdum dapibus.</p>

      <p>Proin congue arcu ac neque tristique aliquet. Morbi tincidunt risus at lectus feugiat cursus. Aliquam facilisis aliquet dolor, et dignissim turpis porttitor id. Fusce nec ullamcorper neque, ac mattis risus. Mauris odio est, aliquam eu rhoncus ut, interdum eu neque. Suspendisse vulputate, diam sit amet eleifend interdum, est mi imperdiet leo, id interdum velit eros eget elit. Donec vel tincidunt orci. Pellentesque accumsan arcu sed rhoncus dictum. Sed eu libero vitae enim sollicitudin cursus.</p>

      <p>Vivamus vel tincidunt velit. Donec vitae libero in est ultrices rutrum at et nisl. Nulla viverra justo vel gravida dignissim. Nullam ut eros sagittis, porttitor est at, auctor felis. Donec feugiat enim quis lectus mattis, ac ullamcorper elit porttitor. Phasellus faucibus augue in lacinia aliquet. In vulputate neque sed ex semper venenatis. Nam lobortis efficitur sem.</p>

      <p>Vivamus porttitor nunc id mollis imperdiet. In semper ullamcorper laoreet. Aliquam in sapien fermentum nisl volutpat euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean imperdiet metus ac augue molestie bibendum. Donec lobortis diam ut ullamcorper iaculis. Donec ultricies augue at magna tempor pellentesque.</p>

      <p>Mauris et dui dui. Aliquam a ullamcorper diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam quis mollis nisi. Maecenas orci tellus, tincidunt vel nisl ac, luctus rhoncus libero. Donec pretium varius ante, in suscipit justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultrices viverra augue a vehicula. Aliquam quis nunc vel turpis condimentum tincidunt eget nec augue. Maecenas vulputate augue vulputate dapibus blandit.</p>

      <p>Praesent ultrices mauris libero, eu interdum nulla dignissim vitae. Donec vitae vestibulum quam. Cras mollis sit amet tellus vel commodo. Suspendisse blandit risus mauris. Proin suscipit, sem non pharetra sagittis, turpis ante vestibulum nisi, sodales pellentesque tellus odio vitae purus. Nunc cursus, libero vel porttitor dignissim, eros est gravida tellus, gravida tincidunt lectus risus eget sem. Nullam vestibulum blandit enim nec hendrerit. Fusce tempor interdum nulla, a elementum ante auctor eu. Curabitur mollis vehicula placerat. Donec vel pulvinar augue. Nunc lacinia tincidunt gravida. Cras sit amet bibendum dolor.</p>

      <p>Sed sit amet ante semper, posuere turpis at, placerat neque. Phasellus in porttitor ex, et pretium nisl. Mauris maximus, nulla dignissim convallis fermentum, mi tortor varius purus, vitae luctus massa ante a ex. Duis lobortis commodo enim, sit amet tempus nisl. Curabitur erat nisl, rhoncus sed vulputate non, tempus vel nisl. Cras convallis vel augue vitae facilisis. Phasellus sit amet luctus ante. Proin ac ligula augue. Sed augue nibh, interdum ac porta et, euismod non massa.</p>

      <p>Aenean non placerat lorem. Morbi sagittis vel lectus sit amet imperdiet. In suscipit tincidunt metus, id congue ante tempor eu. In hac habitasse platea dictumst. Curabitur id tellus cursus, auctor elit vel, elementum mi. Sed suscipit sapien ut efficitur pretium. Sed vestibulum diam sed libero maximus pulvinar.</p>
    </StyledAccordion>
  </Overlay>
  <Overlay
    open={state.open3}
    heading="Overlay with paper"
    onClose={() => setState({ open3: false })}
    topOffset={0}
  >
    <StyledPaper>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna tortor, ornare ac nisl quis, sollicitudin placerat augue. Nulla facilisi. Integer rhoncus mollis ligula, varius convallis nisl porta sit amet. Aenean semper, justo non finibus congue, ex sem vestibulum quam, posuere fermentum turpis elit nec neque. Nullam a ornare neque. In eu rhoncus sem. Nunc ultrices dignissim neque a faucibus. Praesent purus felis, commodo et velit in, semper elementum erat. Quisque convallis congue lobortis. Nam tellus lectus, blandit vitae condimentum at, pellentesque vel est.</p>

      <p>Mauris laoreet leo ut ex ornare dictum at nec nisl. Mauris placerat mi a lacinia facilisis. Donec rhoncus leo vitae gravida rutrum. Sed posuere placerat lorem, non ultrices quam rutrum at. Proin iaculis aliquam erat. Proin mattis, est in volutpat efficitur, nunc lacus hendrerit neque, vel venenatis eros sapien eu tortor. Nullam vel lectus quam. Integer gravida, dolor vitae egestas placerat, augue enim egestas ex, ac lobortis turpis purus a tortor. Aliquam rhoncus cursus dui, nec rutrum quam blandit id.</p>

      <p>Fusce ac sodales enim. Vivamus sit amet nisi ante. Donec maximus tincidunt sem ac aliquam. Phasellus placerat dapibus massa, a luctus enim. Donec enim purus, gravida sed risus id, consectetur venenatis sapien. Mauris eu sapien urna. Cras in sem libero. Aenean eu nibh non ante tincidunt vulputate vel et ante. Proin euismod tempus massa, eu tempor risus sodales in. Duis vitae eros feugiat, tristique ligula nec, cursus sem. Vestibulum elementum viverra justo.</p>

      <p>Sed a pharetra justo. Pellentesque libero nibh, interdum vulputate pellentesque ut, blandit in turpis. Sed lacinia lacus in aliquet finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ac leo vel tellus sagittis finibus. Phasellus et nisi nisl. Phasellus quis nunc sagittis, faucibus mauris condimentum, euismod nisl. Mauris maximus egestas facilisis. Praesent lobortis elementum elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

      <p>Pellentesque mauris nulla, posuere in porttitor non, accumsan vestibulum mi. Nullam ligula augue, venenatis sed dapibus ut, consectetur at ex. Sed semper interdum nibh ac tincidunt. Sed id dapibus turpis. Aenean accumsan semper metus id auctor. Suspendisse posuere ex nibh, placerat ultrices sapien ullamcorper et. Sed et erat in velit dictum sollicitudin.</p>

      <p>Duis aliquet ligula euismod leo pretium, a varius purus dapibus. Suspendisse sagittis turpis sit amet ex luctus porttitor. Sed volutpat tortor vel urna suscipit dignissim. Proin nec dui massa. In dolor nisl, pretium at porta vel, dignissim et lectus. Aliquam placerat, lectus eget dapibus commodo, velit mi cursus lorem, nec volutpat metus urna molestie mauris. Phasellus a libero mi. Praesent leo sapien, ullamcorper in posuere vel, semper eu risus. Integer ut sagittis ante. Aliquam molestie velit at mauris dapibus, ut tempor sem convallis. Praesent ipsum lacus, elementum sollicitudin vehicula quis, lobortis et justo. Praesent cursus dui quis tortor iaculis malesuada.</p>

      <p>Aliquam at ultrices eros. Praesent eu velit in augue convallis sollicitudin. Suspendisse potenti. Nullam imperdiet in est in finibus. Mauris enim mi, tempus et varius non, fermentum quis felis. Proin mollis odio eros, sed faucibus leo imperdiet vel. Mauris in tempus ex. Aliquam condimentum vulputate est, et posuere leo tempor quis. Mauris vulputate vestibulum hendrerit. Duis consectetur ornare metus, bibendum bibendum neque facilisis eu. Quisque a velit ut nisi tempor feugiat.</p>

      <p>Mauris pellentesque arcu sit amet ex auctor, sed fringilla nibh cursus. Curabitur diam dolor, rutrum a neque vel, molestie maximus diam. Donec maximus odio nec velit pellentesque, vitae volutpat lacus rhoncus. Donec porttitor libero tempus leo placerat, sed scelerisque neque blandit. Sed nunc sem, tempor non semper eget, varius eu urna. Aliquam a nisl lacinia, finibus urna at, accumsan arcu. Nulla non purus tristique, varius ex sed, viverra quam. Fusce enim sem, vestibulum ut nunc ac, ultrices venenatis magna. Proin sagittis, magna porttitor facilisis varius, tellus tortor egestas velit, ac ultrices erat leo et sem. Sed augue nisi, laoreet id risus id, efficitur vestibulum nulla. Proin nec neque eget magna condimentum porttitor. Aliquam mi nibh, tristique quis consequat sit amet, sagittis ut diam. Suspendisse eget lorem vitae purus auctor tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>

      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec non lobortis erat. Nulla semper elit quis dui cursus maximus. Fusce orci leo, consectetur vel nisi ac, efficitur congue dui. Nulla suscipit dictum justo, eu accumsan purus congue quis. Vivamus ac pretium ex. Vivamus eu nisl sem. Donec non purus ut libero interdum dapibus.</p>

      <p>Proin congue arcu ac neque tristique aliquet. Morbi tincidunt risus at lectus feugiat cursus. Aliquam facilisis aliquet dolor, et dignissim turpis porttitor id. Fusce nec ullamcorper neque, ac mattis risus. Mauris odio est, aliquam eu rhoncus ut, interdum eu neque. Suspendisse vulputate, diam sit amet eleifend interdum, est mi imperdiet leo, id interdum velit eros eget elit. Donec vel tincidunt orci. Pellentesque accumsan arcu sed rhoncus dictum. Sed eu libero vitae enim sollicitudin cursus.</p>

      <p>Vivamus vel tincidunt velit. Donec vitae libero in est ultrices rutrum at et nisl. Nulla viverra justo vel gravida dignissim. Nullam ut eros sagittis, porttitor est at, auctor felis. Donec feugiat enim quis lectus mattis, ac ullamcorper elit porttitor. Phasellus faucibus augue in lacinia aliquet. In vulputate neque sed ex semper venenatis. Nam lobortis efficitur sem.</p>
    </StyledPaper>
  </Overlay>
</div>
```
