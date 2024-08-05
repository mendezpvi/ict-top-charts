import { topCharts } from "./data.js";

const trackList = document.getElementById("track-list")

document.addEventListener("DOMContentLoaded", () => {
  trackList.innerHTML = render()

})

function render() {
  return topCharts.map((track) => {
    const formattedPlayback = track.playback.toLocaleString('en-US')
    
    return `
      <li class="track-item">
        <span class="track-position">${track.id}</span>
        <img class="track-cover" src="${track.cover}" alt="${track.song} by ${track.singer}.">
        <h3 class="track-song">${track.song}</h3>
        <h4 class="track-singer">${track.singer}</h4>
        <span class="track-playback">${formattedPlayback}</span>
      </li>
    `
  }).join('')
}