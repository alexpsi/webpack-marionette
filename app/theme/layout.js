import 'milligram';
import './application.css';


export default Mn.View.extend({
  el: 'body',
  regions: {
    'region1': '#js-region-1',
    'region2': '#js-region-2',
    'region3': '#js-region-3',
    'region4': '#js-region-4',
    'region5': '#js-region-5',
  },
  template: false
})
