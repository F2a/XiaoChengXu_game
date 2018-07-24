// component/model/model.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    // 这里定义了属性，属性值可以在组件使用时指定
    _width: {
      type: String,
      value: '300',
    },
    _title: {
      type: String,
      value: '提示',
    },
    _delay: {
      type: Number,
      value: 0,
    },
  },
  /**
   * 页面的初始数据
   */
  data: {
    // 这里是一些组件内部数据
    visibel: false
  },

  methods: {
    showModel: function (e) {
      this.triggerEvent('_showEvent');
      console.log(this.data._delay)
      if (this.data._delay > 0) {
        setTimeout(() => {
          this.setData({ visibel: true });
        }, this.data._delay)
      } else {
        this.setData({ visibel: true });
      }
    },
    hideModel: function (e) {
      this.triggerEvent('_hideEvent');
      this.setData({ visibel: false });
    },
  }
})