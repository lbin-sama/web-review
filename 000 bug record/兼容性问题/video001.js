/*
    场景：背景动画，部分动画，故svga，gif等太大，选用video做动画，视频黑底等，可利用mix-blend-mode属性贴合页面背景
    问题：通常情况下video不加controls属性，视频是不会有控制条的，但部分手机原生浏览器，如小米等出现问题，并不兼容，仍然显示。
    原因：安卓浏览器识别src数据格式，对劫持video标签的渲染
    解决：将src设置为blob（视频流），识别不出数据格式，就不再劫持

    部分代码：
        <video v-show="value"
                muted
                autoplay
                :loop="loop"
                playsinline
                :src="videoData"
                :preload="preload"
                @ended="onPlayEnd">
            Your browser does not support HTML video.
        </video>
        
        data() {
            return {
            videoData: null
            }
        }

        methods: {
            getURL() {
                let url = this.url
                return new Promise(function (resolve, reject) {
                    axios({
                    method: 'get',
                    url,
                    responseType: 'blob', //axios的post方法中responseType的默认值是“json”，改为“blob”即可。
                    type: 'video/mp4'
                    }).then(res => {
                    console.log(res, '@_@')
                    let blob = new Blob([res.data]); //使用Blob类型的数据创建一个Blob类型的对象
                    let url = window.URL.createObjectURL(blob);//将blob对象处理成url
                    resolve(url);
                    }).catch(error => {
                    reject(error);
                    })
                })
            },
            initVideo() {
                this.getURL().then(url => {
                    // console.log(url, 'url111')  //blob:http://localhost:3002/0e7424b0-c40b-4ae5-a0d6-74f6e60xxxxx
                    this.videoData = url
                }).catch(err => {
                    console.log(err);
                });
            }
        }

*/