import Ember from 'ember';

const {Controller, computed} = Ember;

export default Controller.extend({

    stack: false,

    code: computed('content.status', function () {
        return this.get('content.status') > 200 ? this.get('content.status') : 500;
    }),

    message: computed('content.statusText', function () {
        if (this.get('code') === 404) {
            return '未找到此页面';
        }

        return this.get('content.statusText') !== 'error' ? this.get('content.statusText') : '服务器内部错误';
    })
});
