<template>
  <div class="wrapper scroll-demo">
    <demos-component
      name="基础用法"
      demokey="0"
      description="原生的滚动条样式不美观而且修改样式兼容性很差，这里封装了scroll组件可以自定义滚动条样式。"
      :codeStr="codeStr1">
      <template v-slot:code>
        <k-scroll class="content-wrapper">
          <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <img src="https://www.guidedogs.org/wp-content/uploads/2017/07/2O17-8819-purple-2-min-400x400.jpg" alt="">
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
            <p>15</p>
            <p>16</p>
            <p>17</p>
            <p>18</p>
            <p>19</p>
            <p>20</p>
            <p>21</p>
            <p>22</p>
            <p>23</p>
            <p>24</p>
            <p>25</p>
            <p>26</p>
            <p>27</p>
            <p>28</p>
            <p>29</p>
            <p>30</p>
            <p>31</p>
            <p>32</p>
            <p>33</p>
            <p>34</p>
            <p>35</p>
            <p>36</p>
            <p>37</p>
            <p>38</p>
            <p>39</p>
            <p>40</p>
            <p>41</p>
            <p>42</p>
            <p>43</p>
            <p>44</p>
            <p>45</p>
            <p>46</p>
            <p>47</p>
            <p>48</p>
            <p>49</p>
            <p>50</p>
            <p>51</p>
            <p>52</p>
            <p>53</p>
            <p>54</p>
            <p>55</p>
            <p>56</p>
            <p>57</p>
            <p>58</p>
            <p>59</p>
            <p>60</p>
            <p>61</p>
            <p>62</p>
            <p>63</p>
            <p>64</p>
            <p>65</p>
            <p>66</p>
            <p>67</p>
            <p>68</p>
            <p>69</p>
            <p>70</p>
            <p>71</p>
            <p>72</p>
            <p>73</p>
            <p>74</p>
            <p>75</p>
            <p>76</p>
            <p>77</p>
            <p>78</p>
            <p>79</p>
            <p>80</p>
            <p>81</p>
            <p>82</p>
            <p>83</p>
            <p>84</p>
            <p>85</p>
            <p>86</p>
            <p>87</p>
            <p>88</p>
            <p>89</p>
            <p>90</p>
            <p>91</p>
            <p>92</p>
            <p>93</p>
            <p>94</p>
            <p>95</p>
            <p>96</p>
            <p>97</p>
            <p>98</p>
            <p>99</p>
            <p>100</p>
          </div>
        </k-scroll>
      </template>
    </demos-component>
    <demos-component
      name="异步加载"
      demokey="1"
      description="滚动条内容支持异步加载。"
      codedes="2s后给内容添加图片和追加项。"
      :codeStr="codeStr2">
      <template v-slot:code>
        <k-scroll class="content-wrapper">
          <p id="test"></p>
          <p v-for="(i, index) in arr" :key="index">{{i}}</p>
        </k-scroll>
      </template>
    </demos-component>
  </div>
</template>

<script>
import Scroll from '../../../src/components/scroll';
import demosComponent from './demos-component.vue';

export default {
  name: 'KomaDatePickerDemo',
  components: {
    demosComponent,
    'k-scroll': Scroll,
  },
  props: {},
  data () {
    return {
      codeStr1: 
      `
      <k-scroll class="content-wrapper">
          <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <img src="https://www.guidedogs.org/wp-content/uploads/2017/07/2O17-8819-purple-2-min-400x400.jpg" alt="">
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
            <p>15</p>
            <p>16</p>
            <p>17</p>
            <p>18</p>
            <p>19</p>
            <p>20</p>
            <p>21</p>
            <p>22</p>
            <p>23</p>
            <p>24</p>
            <p>25</p>
            <p>26</p>
            <p>27</p>
            <p>28</p>
            <p>29</p>
            <p>30</p>
            <p>31</p>
            <p>32</p>
            <p>33</p>
            <p>34</p>
            <p>35</p>
            <p>36</p>
            <p>37</p>
            <p>38</p>
            <p>39</p>
            <p>40</p>
            <p>41</p>
            <p>42</p>
            <p>43</p>
            <p>44</p>
            <p>45</p>
            <p>46</p>
            <p>47</p>
            <p>48</p>
            <p>49</p>
            <p>50</p>
            <p>51</p>
            <p>52</p>
            <p>53</p>
            <p>54</p>
            <p>55</p>
            <p>56</p>
            <p>57</p>
            <p>58</p>
            <p>59</p>
            <p>60</p>
            <p>61</p>
            <p>62</p>
            <p>63</p>
            <p>64</p>
            <p>65</p>
            <p>66</p>
            <p>67</p>
            <p>68</p>
            <p>69</p>
            <p>70</p>
            <p>71</p>
            <p>72</p>
            <p>73</p>
            <p>74</p>
            <p>75</p>
            <p>76</p>
            <p>77</p>
            <p>78</p>
            <p>79</p>
            <p>80</p>
            <p>81</p>
            <p>82</p>
            <p>83</p>
            <p>84</p>
            <p>85</p>
            <p>86</p>
            <p>87</p>
            <p>88</p>
            <p>89</p>
            <p>90</p>
            <p>91</p>
            <p>92</p>
            <p>93</p>
            <p>94</p>
            <p>95</p>
            <p>96</p>
            <p>97</p>
            <p>98</p>
            <p>99</p>
            <p>100</p>
          </div>
        </k-scroll>
        <style lang="less" scoped>
          .content-wrapper {
            width: 400px;
            height: 400px;
            border: 1px solid #eee;
            border-radius: 4px;
          }
        </style>
      `,
      arr: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      codeStr2: 
      `
        <k-scroll class="content-wrapper">
          <p id="test"></p>
          <p v-for="(i, index) in arr" :key="index">{{i}}</p>
        </k-scroll>

        data(){
          return {
            arr: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
          }
        },
        mounted: {
          setTimeout(() => {
            let img = document.createElement('img')
            img.src = 'https://i.loli.net/2021/01/08/o2dPvGSfZueOlMQ.jpg'
            window.test.appendChild(img)
            this.arr.push(20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,)
          }, 2000)
        }

      `
    };
  },
  mounted() {
    setTimeout(() => {
      let img = document.createElement('img')
      img.src = 'https://i.loli.net/2021/01/08/o2dPvGSfZueOlMQ.jpg'
      window.test.appendChild(img)
      this.arr.push(20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30)
    }, 2000)
  }
}

</script>

<style lang="less" scoped>
* {
    box-sizing: border-box;
  }
  .scroll-demo {
    .content-wrapper {
      width: 400px;
      height: 400px;
      border: 1px solid #eee;
      border-radius: 4px;
    }
  }
</style>