/* empty css               */const c=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}};c();const m=[{name:"MK Ahmed mart",location:[12.912085964802024,77.64867049779774],image:"/businesses/hsr_mk_ahmed_thumbnail.jpg"},{name:"Ram medicals",location:[12.912699700286302,77.65199760796814],image:"/businesses/hsr_ram_medicals_thumbnail.jpg"},{name:"Ciciana",location:[12.913946913099561,77.65170339858358],image:"/businesses/hsr_ciciana_thumbnail.jpg"},{name:"Avin sports",location:[12.922450901808812,77.65131078950675],image:"/businesses/hsr_avin_sports_thumbnail.jpg"},{name:"John Jacobs HSR",location:[12.923476976785192,77.65150015907754],image:"/businesses/hsr_john_jacobs_thumbnail.jpg"}],s=L.map("map",{center:[12.917245225957542,77.64709686610244],crs:L.CRS.EPSG3857,zoom:16,zoomControl:!0,preferCanvas:!1});L.tileLayer("https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",{attribution:'Data by &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',detectRetina:!1,maxNativeZoom:18,maxZoom:18,minZoom:0,noWrap:!1,opacity:1,subdomains:"abc",tms:!1}).addTo(s);const l=new L.Icon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});m.forEach(a=>{const t=L.marker(a.location,{icon:l});t.bindTooltip(`<div class="map-marker-tooltip">
         <h4>${a.name}</h4>
         <img src="${a.image}" alt="" />
       </div>`,{sticky:!0}),t.addTo(s)});
