<template>
  <div class="user-form">
    <el-form :model="model">
      <div class="user-form__name">
        <div class="user-form__inputs">
          <el-form-item :label="$t('FirstName')">
            <BaseInput v-model="model.first_name" />
          </el-form-item>
          <el-form-item :label="$t('LastName')">
            <BaseInput v-model="model.last_name" />
          </el-form-item>
        </div>
        <BaseButton @click="submitForm" class="user-form__submit">{{
          editMode ? $t("Update") : $t("AddUser")
        }}</BaseButton>
      </div>
      <div class="user-form__avatar">
        <el-upload
          ref="uploadRef"
          class="avatar-uploader"
          :show-file-list="false"
          :auto-upload="false"
          action="#"
          :on-change="updatePicture"
        >
          <div class="avatar-container">
            <img :src="model.avatar" class="avatar" />
          </div>
          <el-button class="user-form__change-avatar" :icon="CameraFilled">
            {{ $t("ChangePhoto") }}
          </el-button>
        </el-upload>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/BaseInput.vue";
import { reactive, ref } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import { useInternsStore } from "@/stores/interns";
import type { UploadFile } from "element-plus";
import { CameraFilled } from "@element-plus/icons-vue";

const props = defineProps({
  user: {
    type: Object,
    required: false,
  },
  editMode: {
    type: Boolean,
    default: true,
  },
});

const { updateUserDetails, createUser } = useInternsStore();

const emptyModel = {
  id: 0,
  first_name: "",
  last_name: "",
  avatar: "https://www.w3schools.com/howto/img_avatar.png",
};

const initialModel = ref(props.user ?? emptyModel);
const model = reactive(initialModel);
const updatePicture = (file: UploadFile) =>
  (model.value.avatar = URL.createObjectURL(file.raw!));
const submitForm = () => {
  if (props.editMode) {
    updateUserDetails(model.value);
  } else {
    createUser(model.value);
  }
};
</script>

<style scoped lang="scss">
.user-form {
  margin-top: 2rem;

  :deep(.el-form) {
    display: flex;
    justify-content: space-between;

    @media (max-width: 660px) {
      flex-direction: column-reverse;
    }
  }

  &__name {
    background-color: var(--vt-c-white);
    width: 55%;
    padding: 2rem;

    @media (max-width: 660px) {
      width: 100%;
      margin-top: 2rem;
    }
  }

  &__inputs {
    display: flex;
    column-gap: 1rem;

    @media (max-width: 660px) {
      flex-direction: column;
    }

    :deep(.el-form-item__content) {
      width: 100%;
    }

    :deep(.el-form-item__label) {
      justify-content: flex-start;
    }

    :deep(.el-form-item) {
      flex-direction: column;
      width: 50%;

      @media (max-width: 660px) {
        width: 100%;
      }
    }
  }

  &__avatar {
    width: 40%;
    padding: 2rem;
    background-color: var(--vt-c-white);
    display: flex;

    @media (max-width: 660px) {
      width: 100%;
    }
  }

  &__submit {
    margin-top: 10rem;
  }

  &__change-avatar {
    width: 100%;
    margin-top: 2rem;
  }

  :deep(.el-upload) {
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
  }

  .avatar-uploader {
    width: 100%;
    display: flex;
  }

  .avatar {
    border-radius: 50%;
    height: 10rem;
    width: 10rem;

    &-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
