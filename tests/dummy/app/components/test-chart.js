import Ember from 'ember';
import c3 from 'c3';

const { Component } = Ember;

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);
    let chart = c3.generate({
      bindto: `#${this.get('elementId')} .chart-target`,
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ]
      }
    });
    this.set('chart', chart);
  }
});
