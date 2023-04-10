<template>
  <transition appear name="slide-fade">
    <div class="rules-container">
      <header class="header">
        <router-link to="/">
          <img class="close-icon" src="../../assets/icon/close.svg" alt="close">
        </router-link>
        <h1 class="heading">规则</h1>
      </header>
      <div class="content">
        <div class="title">
          <img src="../../assets/icon/tips.svg" alt="tips">
          <h2>规则介绍</h2>
        </div>
        <p class="details">
          1.要诚实回答列出的所有问题，因为这关系到调研报告的准确性。
          2.一个人只有一次抽样问答的机会，而且需要被邀请，非被邀请的人，无法参与这次调研
          3.所有调研结果不会公开个人数据，严格为参与者进行保密。
        </p>
<!--        <div class="title">-->
<!--          <img src="../../assets/icon/question.svg" alt="question">-->
<!--          <h2>常见问题</h2>-->
<!--        </div>-->
<!--        <p class="details">-->
<!--          这里是内容<br>-->
<!--          这里是内容<br>-->
<!--          这里是内容<br>-->
<!--          这里是内容<br>-->
<!--          这里是内容<br>-->
<!--          这里是内容<br>-->

<!--        </p>-->
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'RulesPage'
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
