export const buttons = [
  [
    {value: 'AC', class: 'warning', action: 'reinit'},
    {value: 'undo', class: 'warning', action: 'undo'},
    {value: '%', class: 'warning', action: 'percent'},
    {value: '/', class: 'warning', action: 'addOperator'}
  ],
  [
    {value: '7', class: 'light', action: 'calculate'},
    {value: '8', class: 'light', action: 'calculate'},
    {value: '9', class: 'light', action: 'calculate'},
    {value: '*', class: 'warning', action: 'addOperator'}
  ],
  [
    {value: '4', class: 'light', action: 'calculate'},
    {value: '5', class: 'light', action: 'calculate'},
    {value: '6', class: 'light', action: 'calculate'},
    {value: '-', class: 'warning', action: 'addOperator'}
  ],
  [
    {value: '1', class: 'light', action: 'calculate'},
    {value: '2', class: 'light', action: 'calculate'},
    {value: '3', class: 'light', action: 'calculate'},
    {value: '+', class: 'warning', action: 'addOperator'}
  ],
  [
    {value: '0', class: 'light', action: 'calculate'},
    {value: '.', class: 'light', action: 'addComma'},
    {value: '=', class: 'danger', action: 'equals'}
  ]
];
