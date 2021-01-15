<template>
  <div class="main-side-bar">
    <b-button-toolbar justify>
      <b-button-group>
        <b-dropdown right>
          <template #button-content class="rounded-0">
            Misc
          </template>
          <b-dropdown-item>Misc</b-dropdown-item>
          <b-dropdown-item>Speaker</b-dropdown-item>
        </b-dropdown>
      </b-button-group>
      <b-button-group>
        <b-button squared> Add </b-button>
        <b-dropdown right>
          <template #button-content class="rounded-0">
            Chat User
          </template>
          <b-dropdown-item>User A</b-dropdown-item>
          <b-dropdown-item>User B</b-dropdown-item>
          <b-dropdown-item>User C</b-dropdown-item>
        </b-dropdown>
        <b-button squared variant="danger"> Exit </b-button>
      </b-button-group>
    </b-button-toolbar>
  </div>
</template>

<script>
export default {
  name: "MainSideBar",
  data() {
    return {};
  },
};
</script>

<style>
.main-side-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>