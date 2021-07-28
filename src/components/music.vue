<template>
	<div id="music">
		<!-- 搜索框 -->
		<div class="bar7">
			<div>
				<input type="text" placeholder="请输入歌名" name="crid" @keyup.enter="playMusic(songName)"
					v-model="songName">
				<button type="submit" id="searchMusic" @click="playMusic(songName)"></button>
			</div>
		</div>
		<!--music：当前播放的音乐。 list：播放列表 ：showlrc：是否显示歌词-->
		<aplayer :music="audio[0]" :list="audio" :showlrc="true" style="margin: 0px;border-radius: 5px;"></aplayer>
	</div>
</template>

<script>
	import aplayer from "vue-aplayer";
	import {
		GetSong,
		GetPlayMisicUrl,
		GetPlayMisicLyric
	} from "@/musicNetWork/music.js";
	export default {
		data() {
			return {
				songName: '网易云音乐',

				// 音频列表
				audio: [
					// 默认播放列表
					{
						title: '所念皆星河',
						artist: 'CMJ',
						url: 'https://rt01-sycdn.kuwo.cn/7b5137bac33d558e774c26a95ed38bf4/6077019a/resource/n1/18/25/1394031454.mp3',
						pic: "http://p4.music.126.net/M34HFzLO2xhDLuX_zEALKA==/109951164291347934.jpg?param=100y100",
						lrc: '[00:00.00] (,,•́ . •̀,,) 抱歉，当前歌曲暂无歌词',
					},
				],
			}
		},
		methods: {
			playMusic(songName) {
				this.songName = ''
				// 定义一个存放歌词数据对象的数组
				let songDataArray = []
				GetSong(songName).then(res => {
					console.log(res.result.songs);
					// 循环请求得到的歌曲数据
					res.result.songs.forEach(async (item, index, array) => {
						// 定义一个对象，用于存放具体数据
						let songData = {}
						// 获取歌名
						songData.title = item.name
						// 获取歌手名
						songData.artist = item.ar[0].name
						// 获取照片
						for (var key in item.al) {
							songData.pic = item.al.picUrl + '?param=100y100'
						}
						// 获取歌曲播放地址
						let musicUrl = await GetPlayMisicUrl(item.id)
						songData.url = musicUrl.data[0].url
						// 获取歌词
						let MisicLyric = await GetPlayMisicLyric(item.id)
						if (MisicLyric.nolyric) {
							songData.lrc = '[00:00.00] (,,•́ . •̀,,) 抱歉，当前歌曲暂无歌词'
						} else {
							songData.lrc = MisicLyric.lrc.lyric
						}
						//  完成此条数据的循环，将得到的歌曲数据push到数组
						songDataArray.push(songData)
					});
				})
				// 将此次搜索得到的数据全部赋值给audio,等待播放
				this.audio = songDataArray
			}
		},
		components: {
			aplayer
		},
		mounted() {
			// 页面刷新添加一个自动点击事件
			let searchMusic = document.querySelector('#searchMusic');
			searchMusic.click();

		}
	}
</script>

<style>
	#music {
		width: 285px;
		height: auto;
		margin: 0;
	}

	input,
	button {
		border: none;
		outline: none;
	}

	button {
		height: 32px;
		width: 42px;
		cursor: pointer;
		position: absolute;
	}

	/*搜索框7*/
	.bar7 {
		padding: 0;
		position: relative;
		margin-bottom: 15px;
	}

	.bar7 div {
		height: 32px;
	}

	.bar7 input {
		width: 280px;
		height: 32px;
		border-radius: 20px;
		border: 1px solid #999;
		background: #FFFFFF;
		transition: .3s linear;
	}

	.bar7 input:focus {
		width: 280px;
	}

	.bar7 button {
		background: none;
		position: absolute;
		top: 0px;
		right: 20px;
	}

	.bar7 button:before {
		content: "Search";
		font-family: FontAwesome;
		color: #324b4e;
	}

	// 音乐组件
	.aplayer {
		font-family: Arial, Helvetica, sans-serif;
		color: #000;
		background-color: #fff;
		margin: 0px;
		-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .07), 0 1px 5px 0 rgba(0, 0, 0, .1);
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .07), 0 1px 5px 0 rgba(0, 0, 0, .1);
		border-radius: 5px;
		overflow: hidden;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		line-height: normal;
		position: relative;
	}
</style>
