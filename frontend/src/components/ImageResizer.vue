<template>
    <div id="EditProfileOverlay">
        <div
            class="relative bg-white w-full max-w-[700px] sm:h-[580px] h-[655px] mx-3 p-4 rounded-lg mb-10"
            :class="!uploadedImage ? 'h-[655px]' : 'h-[580px]'"
        >
            <div class="h-[calc(500px-200px)]" :class="!uploadedImage ? 'mt-16' : 'mt-[58px]'">
                <div v-if="!uploadedImage">
                    <div
                        id="ProfilePhotoSection"
                        class="flex flex-col border-b sm:h-[118px] h-[145px] px-1.5 py-2 w-full"
                    >
                        <div class="flex items-center justify-center sm:-mt-6">
                            <label for="image" class="relative cursor-pointer">
                                <img
                                    class="rounded-full"
                                    width="95"
                                    src="https://picsum.photos/id/8/300/320"
                                />
                                <div
                                    class="absolute bottom-0 right-0 rounded-full bg-white shadow-xl border p-1 border-gray-300 inline-block w-[32px]"
                                >
                                    <Icon
                                        name="ph:pencil-simple-line-bold"
                                        size="17"
                                        class="-mt-1 ml-0.5"
                                    />
                                </div>
                            </label>
                            <input
                                class="hidden"
                                type="file"
                                id="image"
                                @input="getUploadedImage"
                                accept="image/png, image/jpeg, image/jpg"
                            />
                        </div>
                    </div>
                </div>

                <div v-else class="w-full h-[430px]">
                    <Cropper
                        class="h-[430px]"
                        ref="cropper"
                        :stencil-component="CircleStencil"
                        :src="uploadedImage"
                    />
                </div>
            </div>

            <div
                id="ButtonSection"
                class="absolute p-5 left-0 bottom-0 border-t border-t-gray-300 w-full"
            >
                <div
                    id="UpdateInfoButtons"
                    v-if="!uploadedImage"
                    class="flex items-center justify-end"
                >
                    <button
                        @click="$generalStore.isEditProfileOpen = false"
                        class="flex items-center border rounded-sm px-3 py-[6px] hover:bg-gray-100"
                    >
                        <span class="px-2 font-medium text-[15px]">Cancel</span>
                    </button>

                    <button
                        :disabled="!isUpdated"
                        @click="updateUserInfo()"
                        :class="!isUpdated ? 'bg-gray-200' : 'bg-[#F02C56]'"
                        class="flex items-center bg-[#F02C56] text-white border rounded-md ml-3 px-3 py-[6px]"
                    >
                        <span class="mx-4 font-medium text-[15px]">Save</span>
                    </button>
                </div>

                <div id="CropperButtons" v-else class="flex items-center justify-end">
                    <button
                        @click="uploadedImage = null"
                        class="flex items-center border rounded-sm px-3 py-[6px] hover:bg-gray-100"
                    >
                        <span class="px-2 font-medium text-[15px]">Cancel</span>
                    </button>

                    <button
                        @click="cropAndUpdateImage()"
                        class="flex items-center bg-[#F02C56] text-white border rounded-md ml-3 px-3 py-[6px]"
                    >
                        <span class="mx-4 font-medium text-[15px]">Apply</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Cropper, CircleStencil } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
import { onMounted, ref, watch } from 'vue';

onMounted(() => {
    userName.value = name.value;
    // userBio.value = bio.value
    userImage.value = image.value;
});

let file = ref(null);
let cropper = ref(null);
let uploadedImage = ref(null);
let userImage = ref(null);
let userName = ref(null);
let userBio = ref(null);
let isUpdated = ref(false);

const getUploadedImage = (e) => {
    file.value = e.target.files[0];
    uploadedImage.value = URL.createObjectURL(file.value);
};
const cropAndUpdateImage = async () => {
    const { coordinates } = cropper.value.getResult();
    let data = new FormData();

    data.append('image', file.value || '');
    data.append('height', coordinates.height || '');
    data.append('width', coordinates.width || '');
    data.append('left', coordinates.left || '');
    data.append('top', coordinates.top || '');

    try {
        userImage.value = image.value;
        uploadedImage.value = null;
    } catch (error) {
        console.log(error);
    }
};

const updateUserInfo = async () => {
    try {
        userName.value = name.value;
        // userBio.value = bio.value

        setTimeout(() => {
            $generalStore.isEditProfileOpen = false;
        }, 100);
    } catch (error) {
        console.log(error);
    }
};

watch(
    () => userName.value,
    () => {
        if (!userName.value || userName.value === name.value) {
            isUpdated.value = false;
        } else {
            isUpdated.value = true;
        }
    }
);

watch(
    () => userBio.value,
    () => {
        if (!userName.value || userBio.value.length < 1) {
            isUpdated.value = false;
        } else {
            isUpdated.value = true;
        }
    }
);
</script>
