import Vue from 'vue';
import SvgIcon from '@/components/SvgIcon/index';// svg组件
import generateIconsView from '@/pages/icon/generateIconsView';// just for @/views/icons , you can delete it
// register globally

Vue.component('svg-icon', SvgIcon);

const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./svg', false, /\.svg$/);
const iconMap = requireAll(req);

generateIconsView.generate(iconMap); // just for @/views/icons , you can delete it
