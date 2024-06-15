// 初始化数据图片
var imgs = {
  // 小图
  small: ['imgA_1.jpg', 'imgB_1.jpg', 'imgC_1.jpg'],
  // 中图
  middle: ['imgA_2.jpg', 'imgB_2.jpg', 'imgC_2.jpg'],
  // 大图
  large: ['imgA_3.jpg', 'imgB_3.jpg', 'imgC_3.jpg']
}
// 单一元素
function $(selector) {
  return document.querySelector(selector);
}

// 多个元素
function $$(selector) {
  return document.querySelectorAll(selector);
}

var smallImgBox = $('.img-list')

console.log("🚀 ~ smallImgBox:", smallImgBox)
