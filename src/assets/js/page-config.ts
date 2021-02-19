export default {
  pageConfig: {
    // 重置数据用，改默认值的话需要改store的common
    list: [],
    title: "云忆网络",
    statsCode: "",
    theme: "theme1",
    fixedTop: [],
    fixedBottom: [],
    fixedCustom: [],
    style: {
      backgroundColor: "#fff",
      backgroundImage: "",
    },
    hijackBack: {
      isHijack: false,
      alertImg: '',
      alertLink: ''
    }
  },
  themes: [
    {
      value: "theme1",
      name: "主题1",
      pageData: { "list": [{ "type": "ImgShow", "name": "图片展示", "positionFixed": "auto", "fixedTypes": ["auto", "top", "bottom"], "scrollHeight": 0, "styleType": "col1", "styleTypes": [{ "value": "col1", "label": "单列" }, { "value": "col2", "label": "双列" }], "imglist": [{ "img": "static/img/theme1.jpg", "link": "" }], "style": { "margin": "0px 0px 0px 0px" }, "key": "ImgShow_1597832935582_347781" }, { "type": "ChildList", "name": "表单内容区", "list": [{ "type": "Phone", "name": "手机号", "placeholder": "请输入手机号", "showLabel": false, "label": { "labelTitle": "手机号", "labelPosition": "left", "labelwidth": 50, "labelWidth": "50px" }, "value": "", "apiKey": "phone", "codeValue": "", "codeKey": "verifyCode", "showCode": true, "style": { "margin": "0px 0px 0px 0px", "btnStyle": { "background": "#e64950", "color": "#fff", "borderColor": "#e64950", "borderRadius": "5px", "borderradius": 5 } }, "key": "Phone_1577685026558_23106" }, { "type": "Button", "name": "按钮", "btnText": "提交", "btnType": "submit", "apiKey": "", "fixedBottom": false, "scrollHeight": 0, "btnTypes": [{ "value": "submit", "label": "提交" }], "style": { "margin": "10px 10px 10px 10px", "padding": "0px 0px 0px 0px", "isImgBtn": false, "value": "", "btnStyle": { "borderRadius": "20px", "borderradius": 20, "background": "#e64950", "color": "#fff" } }, "key": "Button_1577685028838_726439" }], "wgClassName": "wg-formlist", "style": { "margin": "0px 20px 0px 20px", "borderradius": 10, "borderRadius": "10px", "borderColor": "#E64950", "borderwidth": 3, "borderWidth": "3px", "borderStyle": "solid" }, "key": "ChildList_1577685024167_377730" }, { "type": "StaticText", "name": "文本描述", "value": "主题一", "link": "", "backgroundImage": "", "style": { "textAlign": "center", "fontsize": 14, "fontSize": "14px", "color": "#333333", "margin": "10px 10px 10px 10px" }, "key": "StaticText_1568799421345_855582" }], "title": "云忆网络1", "statsCode": "", "theme": "theme1", "style": { "backgroundColor": "#fff", "backgroundImage": "" }, "fixedBottom": [], "fixedCustom": [], "fixedTop": [], "hijackBack": { "isHijack": false, "alertImg": "", "alertLink": "" } }
    },
    {
      value: "theme2",
      name: "主题2",
      pageData: { "list": [{ "type": "ImgShow", "name": "图片展示", "positionFixed": "auto", "fixedTypes": ["auto", "top", "bottom"], "scrollHeight": 0, "styleType": "col1", "styleTypes": [{ "value": "col1", "label": "单列" }, { "value": "col2", "label": "双列" }], "imglist": [{ "img": "static/img/theme2.jpg", "link": "" }], "style": { "margin": "0px 0px 0px 0px" }, "key": "ImgShow_1597832935582_347781" }, { "type": "ChildList", "name": "表单内容区", "wgClassName": "wg-formlist", "list": [{ "type": "Phone", "name": "手机号", "placeholder": "请输入手机号", "showLabel": true, "label": { "labelTitle": "手机号", "labelPosition": "left", "labelwidth": 50, "labelWidth": "50px" }, "value": "", "apiKey": "phone", "codeValue": "", "codeKey": "verifyCode", "showCode": true, "style": { "margin": "0px 0px 0px 0px", "btnStyle": { "background": "#FFFFFF", "color": "#707888", "borderColor": "#707888", "borderRadius": "5px", "borderradius": 5 } }, "key": "Phone_1568809744600_26894" }, { "type": "Button", "name": "按钮", "btnText": "提交", "btnType": "submit", "apiKey": "", "fixedBottom": false, "scrollHeight": 0, "btnTypes": [{ "value": "submit", "label": "提交" }], "style": { "margin": "10px 0px 10px 0px", "padding": "0px 0px 0px 0px", "isImgBtn": false, "value": "", "btnStyle": { "borderRadius": "20px", "borderradius": 20, "background": "#707888", "color": "#fff" } }, "key": "Button_1577685124991_299802" }], "style": { "margin": "10px 20px 0px 20px", "borderradius": 10, "borderRadius": "10px", "borderColor": "#707888", "borderwidth": 3, "borderWidth": "3px", "borderStyle": "solid" }, "key": "ChildList_1568799408464_381771" }, { "type": "StaticText", "name": "文本描述", "value": "主题二", "link": "", "backgroundImage": "", "style": { "textAlign": "center", "fontsize": 14, "fontSize": "14px", "color": "#333333", "margin": "10px 10px 10px 10px" }, "key": "StaticText_1568799421345_855582" }], "title": "云忆网络2", "statsCode": "", "theme": "theme2", "style": { "backgroundColor": "#fff", "backgroundImage": "" }, "fixedBottom": [], "hijackBack": { "isHijack": false, "alertImg": "", "alertLink": "" } }
    },
    {
      value: "theme3",
      name: "主题3",
      pageData: { "list": [{ "type": "ImgShow", "name": "图片展示", "positionFixed": "auto", "fixedTypes": ["auto", "top", "bottom"], "scrollHeight": 0, "styleType": "col1", "styleTypes": [{ "value": "col1", "label": "单列" }, { "value": "col2", "label": "双列" }], "imglist": [{ "img": "static/img/theme3.jpg", "link": "" }], "style": { "margin": "0px 0px 0px 0px" }, "key": "ImgShow_1597832935582_347781" }, { "type": "ChildList", "name": "表单内容区", "wgClassName": "wg-formlist", "list": [{ "type": "Phone", "name": "手机号", "placeholder": "请输入手机号", "showLabel": false, "label": { "labelTitle": "手机号", "labelPosition": "left", "labelwidth": 50, "labelWidth": "50px" }, "value": "", "apiKey": "phone", "codeValue": "", "codeKey": "verifyCode", "showCode": true, "style": { "margin": "0px 0px 0px 0px", "btnStyle": { "background": "#FFFFFF", "color": "#A92200", "borderColor": "#A92200", "borderRadius": "5px", "borderradius": 5 } }, "key": "Phone_1568809861943_670004" }, { "type": "Button", "name": "按钮", "btnText": "提交", "btnType": "submit", "apiKey": "", "fixedBottom": false, "scrollHeight": 0, "btnTypes": [{ "value": "submit", "label": "提交" }], "style": { "margin": "10px 10px 10px 10px", "padding": "0px 0px 0px 0px", "isImgBtn": false, "value": "", "btnStyle": { "borderRadius": "20px", "borderradius": 20, "background": "#D30506", "color": "#fff" } }, "key": "Button_1577685187407_39106" }], "style": { "margin": "10px 20px 0px 20px", "borderradius": 10, "borderRadius": "10px", "borderColor": "#a92200", "borderwidth": 3, "borderWidth": "3px", "borderStyle": "solid" }, "key": "ChildList_1568799408464_381771" }, { "type": "StaticText", "name": "文本描述", "value": "主题三", "link": "", "backgroundImage": "", "style": { "textAlign": "center", "fontsize": 14, "fontSize": "14px", "color": "#333333", "margin": "10px 10px 10px 10px" }, "key": "StaticText_1568799421345_855582" }], "title": "云忆网络3", "statsCode": "", "theme": "theme3", "style": { "backgroundColor": "#fff", "backgroundImage": "" }, "fixedBottom": [], "hijackBack": { "isHijack": false, "alertImg": "", "alertLink": "" } }
    }
  ]
}