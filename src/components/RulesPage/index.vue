<template>
  <transition appear name="slide-fade">
    <div class="rules-container">
      <header class="header">
        <router-link to="/">
          <img class="close-icon" src="../../assets/icon/close.svg" alt="close">
        </router-link>
        <h1 class="heading">Правила</h1>
      </header>
      <div class="content">
        <div class="title">
          <img src="../../assets/icon/tips.svg" alt="tips">
          <h2>Введение в правила</h2>
        </div>
        <p class="details">

          1.要诚实回答列出的所有问题，因为这关系到调研报告的准确性。<br>
          2.一个人只有一次抽样问答的机会，而且需要被邀请，非被邀请的人，无法参与这次调研。<br><br>
          3.所有调研结果不会公开个人数据，严格为参与者进行保密。<br><br>
        </p>
        <div class="title">
          <img src="../../assets/icon/question.svg" alt="question">
          <h2>常见问题</h2>
        </div>


        <p class="details">
          1.如果未完成，无法获得奖金<br><br>
          2.如果不知道在哪里领取奖金请联系工作人员<br><br>
          3.有任何疑问请联系工作人员<br><br>
        </p>
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
