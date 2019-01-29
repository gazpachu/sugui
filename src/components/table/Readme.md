The Table component is used to display data in rows and columns. It also includes a search, sort and pagination functionality.

The search functionality uses the [react-search-input](https://github.com/enkidevs/react-search-input) lib in the background to filter the data in the table.

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/src/components/table/index.jsx" target="_blank">component implementation</a>

Simple table example:

```jsx
const { default: styled } = require('styled-components');
const FilterIcon = require('../../icons/filter').default;
const DownloadIcon = require('../../icons/download').default;

const Icons = styled.ul`
  list-style-type: none;
  float: right;
  padding: 0;
  margin: 10px;
`;

const Icon = styled.li`
  display: inline-block;
`;

const columns = [
  {id: 'id', header: 'ID'},
  {id: 'make', header: 'Make'},
  {id: 'model', header: 'Model'},
  {id: 'year', header: 'Year'},
  {id: 'type', header: 'Type'},
  {id: 'price', header: 'Price'}
];

const columnData = [
  {id: '1', make: 'BMW', model: '325i', year: 1988, type: 'Sedan', price: 21000},
  {id: '2', make: 'BMW', model: 'M3', year: 2018, type: 'Sedan', price: 80000},
  {id: '3', make: 'Jaguar', model: 'F-Pace', year: 2018, type: 'SUV', price: 65000},
  {id: '4', make: 'Volkswagen', model: 'Golf R32', year: 2004, type: 'Hatchback', price: 24500},
  {id: '5', make: 'Mitsubishi', model: 'Lancer', year: 2002, type: 'Sedan', price: 15000},
  {id: '6', make: 'Aston Martin', model: 'DB9', year: 2011, type: 'Convertible', price: 259000}
];

const filters = ['id', 'make', 'model', 'year', 'type', 'price'];

<Table
  columns={columns}
  columnData={columnData}
  filters={filters}
>
  <Icons>
    <Icon><button><DownloadIcon color="black" /></button></Icon>
    <Icon><button><FilterIcon color="black" /></button></Icon>
  </Icons>
</Table>
```

Table example with pagination:

```jsx
const columns2 = [
  {id: 'id', header: 'ID'},
  {id: 'name', header: 'Name'},
  {id: 'country', header: 'Country'},
  {id: 'date', header: 'Date'},
  {id: 'email', header: 'Email'},
  {id: 'menu', header: ''}
];

// Generated with http://www.databasetestdata.com
const columnData2 = [
  {
    id: 0,
    name: "Ms. Susan Mohr",
    country: "Union of Soviet Socialist Republics",
    date: "1984-04-14T01:23:21.086Z",
    email: "Eudora_Crona@rebekah.org",
    menu: null
  },
  {
    id: 1,
    name: "Lorenz Adams",
    country: "Poland",
    date: "1993-07-08T07:59:33.741Z",
    email: "Shea.Schuppe@camille.me",
    menu: null
  },
  {
    id: 2,
    name: "Amina Hilpert",
    country: "Jersey",
    date: "1993-09-16T15:09:39.701Z",
    email: "Rowena_Brown@woodrow.com",
    menu: null
  },
  {
    id: 3,
    name: "Malachi Crooks V",
    country: "Falkland Islands",
    date: "1991-06-23T22:27:42.823Z",
    email: "Paxton@everardo.com",
    menu: null
  },
  {
    id: 4,
    name: "Rashawn Welch V",
    country: "Hong Kong SAR China",
    date: "2013-11-08T18:31:15.680Z",
    email: "Bethel.Walsh@lula.co.uk",
    menu: null
  },
  {
    id: 5,
    name: "Georgette Abernathy",
    country: "Samoa",
    date: "1980-10-11T08:34:14.110Z",
    email: "Wilber@mekhi.net",
    menu: null
  },
  {
    id: 6,
    name: "Sven Miller",
    country: "Norway",
    date: "1990-05-05T12:39:53.665Z",
    email: "Morgan@carlie.biz",
    menu: null
  },
  {
    id: 7,
    name: "Cielo Moen",
    country: "Wake Island",
    date: "2012-11-18T13:19:20.698Z",
    email: "Janae_Tromp@adolf.me",
    menu: null
  },
  {
    id: 8,
    name: "Macey Runolfsson",
    country: "Romania",
    date: "1993-09-01T19:54:38.252Z",
    email: "Diego_OReilly@dane.co.uk",
    menu: null
  },
  {
    id: 9,
    name: "Casimer Mann",
    country: "Pacific Islands Trust Territory",
    date: "1997-11-09T07:32:10.044Z",
    email: "Joesph@gayle.name",
    menu: null
  },
  {
    id: 10,
    name: "Anne Mante",
    country: "Faroe Islands",
    date: "1986-02-09T22:26:58.226Z",
    email: "Dock.Rempel@patience.com",
    menu: null
  },
  {
    id: 11,
    name: "Reva McKenzie",
    country: "Moldova",
    date: "2007-04-21T10:58:24.219Z",
    email: "Joshua.Hammes@cristal.biz",
    menu: null
  },
  {
    id: 12,
    name: "Wyatt Leannon",
    country: "Martinique",
    date: "2000-08-10T22:45:34.510Z",
    email: "Nora@omari.io",
    menu: null
  },
  {
    id: 13,
    name: "Carol Runolfsdottir MD",
    country: "Tanzania",
    date: "2018-07-07T22:21:31.204Z",
    email: "Ada@ruby.biz",
    menu: null
  },
  {
    id: 14,
    name: "Jocelyn Doyle II",
    country: "British Virgin Islands",
    date: "2006-03-02T23:33:28.624Z",
    email: "Lessie@camille.me",
    menu: null
  },
  {
    id: 15,
    name: "Rylan Parisian",
    country: "Palau",
    date: "2018-02-21T11:46:21.619Z",
    email: "Mateo_Reichert@lonnie.net",
    menu: null
  },
  {
    id: 16,
    name: "Name Leffler",
    country: "Eritrea",
    date: "2006-08-05T15:18:41.352Z",
    email: "Franz_Miller@walker.co.uk",
    menu: null
  },
  {
    id: 17,
    name: "Enoch Parker",
    country: "Grenada",
    date: "2006-08-17T22:31:01.965Z",
    email: "Lorenz@isadore.biz",
    menu: null
  },
  {
    id: 18,
    name: "Jerod Christiansen",
    country: "Antarctica",
    date: "1988-05-10T19:27:36.190Z",
    email: "Yasmine_Turner@nellie.info",
    menu: null
  },
  {
    id: 19,
    name: "Kattie Steuber",
    country: "Djibouti",
    date: "1996-08-06T06:01:48.607Z",
    email: "Susie.Halvorson@mallory.info",
    menu: null
  },
  {
    id: 20,
    name: "Pablo Olson",
    country: "San Marino",
    date: "1992-11-16T13:28:02.022Z",
    email: "Emil@isaiah.tv",
    menu: null
  },
  {
    id: 21,
    name: "Linwood Beatty",
    country: "Portugal",
    date: "1996-01-24T12:45:10.928Z",
    email: "Blanche_Dickinson@estell.us",
    menu: null
  },
  {
    id: 22,
    name: "Narciso Paucek DVM",
    country: "Mauritania",
    date: "2010-03-04T21:21:46.860Z",
    email: "Reyna_Medhurst@gabe.ca",
    menu: null
  },
  {
    id: 23,
    name: "Patrick Cormier",
    country: "Cambodia",
    date: "1993-10-07T14:11:01.464Z",
    email: "Berniece.Beer@marc.co.uk",
    menu: null
  },
  {
    id: 24,
    name: "Mr. Rebecca Kilback",
    country: "Sri Lanka",
    date: "2010-07-31T16:29:14.892Z",
    email: "Marjolaine@darion.net",
    menu: null
  },
  {
    id: 25,
    name: "Craig Tremblay",
    country: "Maldives",
    date: "2009-02-23T09:18:49.300Z",
    email: "Arjun@albert.biz",
    menu: null
  },
  {
    id: 26,
    name: "Ariel VonRueden MD",
    country: "Western Sahara",
    date: "1987-04-10T14:55:54.085Z",
    email: "Dallin_Wyman@melvina.info",
    menu: null
  },
  {
    id: 27,
    name: "Amara Langosh IV",
    country: "Angola",
    date: "1992-08-26T15:43:37.145Z",
    email: "Quentin@carmine.info",
    menu: null
  },
  {
    id: 28,
    name: "Merl Klocko",
    country: "Peru",
    date: "2013-11-23T09:05:22.563Z",
    email: "Bryon@nola.us",
    menu: null
  },
  {
    id: 29,
    name: "Jonathon Roberts",
    country: "Midway Islands",
    date: "1995-02-25T14:34:07.220Z",
    email: "Osbaldo@bettye.biz",
    menu: null
  }
];

const filters2 = ['id', 'name', 'country', 'date', 'email'];

const MoreVertIcon = require('../../icons/moreVert').default;
const initialState = { anchorEl: null, currentId: null }

const onRenderCell2 = (row, key) => {
  if (key === 'menu') return (
    <div style={{ position: 'relative' }}>
      <button
      onClick={(event) => {
        event.preventDefault();
        setState({ anchorEl: event.currentTarget, currentId: row.id });
      }}
    >
      <MoreVertIcon color="black" />
    </button>
    <Menu
      anchorEl={state.anchorEl}
      open={Boolean(state.anchorEl) && state.currentId === row.id}
      onClose={(event) => {
        event.preventDefault();
        setState({ anchorEl: null, currentId: null });
      }}
    >
      <li onClick={() => { setState({ anchorEl: null }); }}>Clone</li>
      <li onClick={() => { setState({ anchorEl: null }); }}>Remove</li>
    </Menu>
  </div>);
  return row[key];
};

<Table
  columns={columns2}
  columnData={columnData2}
  filters={filters2}
  onRenderCell={onRenderCell2}
/>
```

Table example with links, icons, currency formatting and buttons:

```jsx
const { default: styled } = require('styled-components');
const CalendarIcon = require('../../icons/calendar').default;

const StyledCalendarIcon = styled(CalendarIcon)`
  vertical-align: middle;
  margin-right: 5px;
`;

const onRenderCell = (row, key) => {
  if (key === 'make') return <a href={`http://${row[key]}.com`} target="_blank">{row[key]}</a>;
  if (key === 'year') return <span><StyledCalendarIcon color="gray" />{row[key]}</span>;
  if (key === 'price') return `$${row[key].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  if (key === 'buy') return <a href={`http://${row[key]}`} className="button"><Button size="small" color="secondary">BUY</Button></a>;
  return row[key];
};

const columns = [
  {id: 'make', header: 'Make'},
  {id: 'model', header: 'Model'},
  {id: 'year', header: 'Year'},
  {id: 'type', header: 'Type'},
  {id: 'price', header: 'Price'},
  {id: 'buy', header: ''}
];

const columnData3 = [
  {id: '1', make: 'BMW', model: '325i', year: 1988, type: 'Sedan', price: 21000, buy: 'buy-325i'},
  {id: '2', make: 'BMW', model: 'M3', year: 2018, type: 'Sedan', price: 80000, buy: 'M3'},
  {id: '3', make: 'Jaguar', model: 'F-Pace', year: 2018, type: 'SUV', price: 65000, buy: 'F-Pace'},
  {id: '4', make: 'Volkswagen', model: 'Golf R32', year: 2004, type: 'Hatchback', price: 24500, buy: 'Golf-R32'},
  {id: '5', make: 'Mitsubishi', model: 'Lancer', year: 2002, type: 'Sedan', price: 15000, buy: 'Lancer'},
  {id: '6', make: 'Aston Martin', model: 'DB9', year: 2011, type: 'Convertible', price: 259000, buy: 'DB9'}
];

const filters3 = ['id', 'make', 'model', 'year', 'type', 'price'];

<Table
  columns={columns}
  columnData={columnData3}
  filters={filters3}
  onRenderCell={onRenderCell}
  skipIDs
/>
```
