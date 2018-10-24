const themeableProperties = {
  '--terra-clinical-data-grid-border': '5px dashed red',
  '--terra-clinical-data-grid-column-header-background-color': 'blue',
  '--terra-clinical-data-grid-column-header-border-bottom': 'yellow',
  '--terra-clinical-data-grid-background-color': 'purple',
  '--terra-clinical-data-grid-pinned-column-box-shadow': '0 0 12px 0 red',
  '--terra-clinical-data-grid-section-header-height': '4rem',
  '--terra-clinical-data-grid-scrollbar-background-color': 'green',
  '--terra-clinical-data-grid-cell-border-right': '2px solid black',
  '--terra-clinical-data-grid-cell-hover-background-color': 'lightblue',
  '--terra-clinical-data-grid-cell-selected-background-color': 'brown',
  '--terra-clinical-data-grid-cell-selected-hover-background-color': 'darkblue',
  '--terra-clinical-data-grid-header-cell-border-right': '3px solid black',
  '--terra-clinical-data-grid-column-header-text-color': 'green',
  '--terra-clinical-data-grid-resize-handle-width': '15px',
  '--terra-clinical-data-grid-resize-handle-hover-background-color': 'blue',
  '--terra-clinical-data-grid-resize-handle-active-background-color': 'red',
  '--terra-clinical-data-grid-row-background-color': 'lightgreen',
  '--terra-clinical-data-grid-row-striped-background-color': 'lightpink',
  '--terra-clinical-data-grid-row-hover-background-color': 'blue',
  '--terra-clinical-data-grid-row-selected-background-color': 'darksalmon',
  '--terra-clinical-data-grid-row-selected-box-shadow': 'inset 0 1px 0 0 yellow, inset 0 -1px 0 0 yellow',
  '--terra-clinical-data-grid-row-selected-hover-background-color': 'salmon',
  '--terra-clinical-data-grid-scrollbar-height': '20px',
  '--terra-clinical-data-grid-scrollbar-hover-height': '30px',
  '--terra-clinical-data-grid-scrollbar-color': 'purple',
  '--terra-clinical-data-grid-scrollbar-border-radius': '0px',
  '--terra-clinical-data-grid-scrollbar-active-color': 'darkgreen',
  '--terra-clinical-data-grid-section-header-background-color': 'yellow',
  '--terra-clinical-data-grid-section-header-border-bottom': 'blueviolet',
  '--terra-clinical-data-grid-section-header-hover-background-color': 'green',
};

export default {
  viewports: ['medium', 'huge'],
  selector: '#no-pinned-column-data-grid',
  themeableProperties,
  steps: [
    {
      name: 'with initial rendering',
    },
    {
      name: 'with horizontal overflow',
      action: () => {
        global.browser.click('[data-cell-label="section_0-0-Column-12"]');
      },
    },
    {
      name: 'with vertical overflow',
      action: () => {
        global.browser.click('[data-cell-label="section_0-29-Column-12"]');
      },
    },
  ],
};
