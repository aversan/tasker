require('../blocks/mdlComponentHandler/mdlComponentHandler');
require('../blocks/button/button');
require('../blocks/checkbox/checkbox');
require('../blocks/icon-toggle/icon-toggle');
require('../blocks/layout/layout');
require('../blocks/menu/menu');
require('../blocks/radio/radio');
require('../blocks/ripple/ripple');
require('../blocks/textfield/textfield');
let swiper = require('../blocks/swiper/swiper');

import $ from 'jquery';
$(() => {
	swiper('.swiper-container--members, .swiper-container--assignee', {
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        scrollbarHide: false,
        scrollbarDraggable: true
	});
});
