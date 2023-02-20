<script setup lang="ts">
import { Close } from "@element-plus/icons-vue";
import BaseButton from "@/components/BaseButton.vue";
import { useInternsStore } from "@/stores/interns";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  id: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits(["closeModal"]);
const closeModal = () => emit("closeModal");
const { deleteIntern } = useInternsStore();

const sendRequestAndCloseModal = () => {
  deleteIntern(props.id);
  closeModal();
};
</script>
<template>
  <Teleport to="body">
    <div class="modal-container" v-if="open">
      <div class="modal">
        <div class="modal__header">
          <el-icon @click="closeModal" class="modal__icon"><Close /></el-icon>
        </div>
        <div class="modal__body">
          {{ $t("SureToDelete") }}
        </div>
        <div class="modal__buttons">
          <BaseButton @click="sendRequestAndCloseModal">{{
            $t("Yes")
          }}</BaseButton>
          <BaseButton @click="closeModal" type="danger">{{
            $t("No")
          }}</BaseButton>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.modal {
  &-container {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;

    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  background-color: var(--vt-c-white-soft);
  height: 15rem;
  width: 40rem;
  padding: 1rem;
  z-index: 2;

  @media (max-width: 660px) {
    height: 20rem;
    width: 30rem;
  }

  &__buttons {
    padding: 0.5rem;
    display: flex;
    justify-content: space-around;
  }

  &__header {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  &__body {
    display: flex;
    justify-content: center;
    align-content: center;
  }

  &__icon {
    cursor: pointer;
  }
}
</style>
