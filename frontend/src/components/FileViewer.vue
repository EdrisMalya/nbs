<template>
    <div>
        <q-btn :href="url" target="_blank" round flat icon="download" />
        <q-img v-if="isImage" :src="url" alt="Uploaded file preview" class="image-preview" />

        <embed v-else-if="isPdf" :src="url" type="application/pdf" class="pdf-preview" />

        <div v-else class="unsupported-file">Unsupported file format: .{{ fileExtension }}</div>
    </div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true,
        },
    },
    computed: {
        fileExtension() {
            const parts = this.url.split('.');
            return parts.length > 1 ? parts.pop().toLowerCase() : '';
        },
        isImage() {
            return ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(this.fileExtension);
        },
        isPdf() {
            return this.fileExtension === 'pdf';
        },
    },
};
</script>

<style scoped>
.file-preview {
    margin: 20px 0;
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 10px;
}

.image-preview {
    max-width: 100%;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.pdf-preview {
    width: 100%;
    height: 600px;
    border: none;
    border-radius: 4px;
}

.unsupported-file {
    padding: 20px;
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    border-radius: 4px;
}
</style>
