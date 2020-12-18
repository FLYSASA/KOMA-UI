<template>
  <div id="app">
    <g-scroll style="width: 400px; height: 400px;">
        <p style="width: 1000px;">1</p>
        <p id="test2">2</p>
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
    </g-scroll>

    <g-scroll style="width: 400px; height: 400px;">
      <p v-for="(i, index) in arr" :key="index">{{i}}</p>
    </g-scroll>
  </div>
</template>

<script>
import GPager from '@/components/pager/pager';
import GTable from '@/components/table/table';
import GTableColumn from '@/components/table/table-column'
import GScroll from '@/components/scroll'

export default {
  name: 'ButtonDemo',
  components: {
    GPager,
    GTable,
    GTableColumn,
    GScroll
  },
  props: {},
  data () {
    return {
      arr: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    };
  },
  mounted() {
    setTimeout(() => {
      let img = document.createElement('img')
      img.src = 'https://developer.mozilla.org/static/browsers/samsung-internet.8faa2ee1b8a1.svg'
      img.height = 1000
      window.test2.appendChild(img)

      this.arr.push(20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,40,20,30,)
    }, 3000)
  },
  methods: {},
}

</script>
<style lang="less">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #app {
    // margin: 20px;
  }
  .parent {
    height: 400px;
    width: 400px;
    border: 5px solid red;
    overflow: hidden;
    .child {
      border: 5px solid;
    }
  }

</style>