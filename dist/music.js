const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "童话镇",
        artist: '陈一发',
        url: 'http://www.ytmp3.cn/down/35848.mp3',
        cover: 'http://img.ytmp3.cn/image/35.jpg',
      },
      {
        name: '多想留在你身边',
        artist: '刘增瞳',
        url: 'http://www.ytmp3.cn/down/49817.mp3',
        cover: 'http://img.ytmp3.cn/image/6.jpg',
      },
      {
        name: '不待',
        artist: '忱忱老板',
        url: 'http://www.ytmp3.cn/down/57932.mp3',
        cover: 'http://img.ytmp3.cn/image/40.jpg',
      },
	  {
        name: 'City Of Stars',
        artist: 'ryan gosling',
        url: 'http://www.ytmp3.cn/down/36500.mp3',
        cover: 'http://img.ytmp3.cn/image/62.jpg',
      }
    ]
});