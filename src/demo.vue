<template>
  <div id="app">
    <div>
      <g-carousel :selected.sync="carouselSelected">
        <g-carousel-item v-for="i in 3" :key="i" :name="i">
          <div class="box">{{ i }}</div>
        </g-carousel-item>
      </g-carousel>
    </div>
  </div>
</template>

<script>
import GCarousel from './carousel';
import GCarouselItem from './carousel-item';
import Cascader from './cascader'
import db from './defs/db';
import Popover from './popover';

export default {
  name: 'demo',
  components: {
    'g-cascader': Cascader,
    'g-popover': Popover,
    GCarousel,
    GCarouselItem
  },
  props: {},
  data () {
    return {
      carouselSelected: 1,
    };
  },
  computed: {},
  methods: {
  }
}

</script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .box {
    width: 200px;
    height: 200px;
    background:#ddd;
    border: 1px solid red;
  }

</style>