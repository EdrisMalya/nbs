<template>
    <p class="font-bold text-lg pb-1">{{ $translate(label) }}</p>
    <div :class="error && 'border border-red-500'">
        <q-editor
            v-model="editor"
            :dense="$q.screen.lt.md"
            :toolbar="[
                [
                    {
                        label: $q.lang.editor.align,
                        icon: $q.iconSet.editor.align,
                        fixedLabel: true,
                        list: 'only-icons',
                        options: ['left', 'center', 'right', 'justify'],
                    },
                    {
                        label: $q.lang.editor.align,
                        icon: $q.iconSet.editor.align,
                        fixedLabel: true,
                        options: ['left', 'center', 'right', 'justify'],
                    },
                ],
                ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
                ['token', 'hr', 'link', 'custom_btn'],
                ['print', 'fullscreen'],
                [
                    {
                        label: $q.lang.editor.formatting,
                        icon: $q.iconSet.editor.formatting,
                        list: 'no-icons',
                        options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
                    },
                    {
                        label: $q.lang.editor.fontSize,
                        icon: $q.iconSet.editor.fontSize,
                        fixedLabel: true,
                        fixedIcon: true,
                        list: 'no-icons',
                        options: [
                            'size-1',
                            'size-2',
                            'size-3',
                            'size-4',
                            'size-5',
                            'size-6',
                            'size-7',
                        ],
                    },
                    {
                        label: $q.lang.editor.defaultFont,
                        icon: $q.iconSet.editor.font,
                        fixedIcon: true,
                        list: 'no-icons',
                        options: [
                            'default_font',
                            'arial',
                            'arial_black',
                            'comic_sans',
                            'courier_new',
                            'impact',
                            'lucida_grande',
                            'times_new_roman',
                            'verdana',
                        ],
                    },
                    'removeFormat',
                ],
                ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                ['undo', 'redo'],
                ['viewsource'],
            ]"
            :fonts="{
                arial: 'Arial',
                arial_black: 'Arial Black',
                comic_sans: 'Comic Sans MS',
                courier_new: 'Courier New',
                impact: 'Impact',
                lucida_grande: 'Lucida Grande',
                times_new_roman: 'Times New Roman',
                verdana: 'Verdana',
            }"
        />
        <p class="text-red-500 p-3 text-xs" v-if="!!error">{{ error }}</p>
    </div>
</template>
<script>
export default {
    props: ['onChange', 'error', 'label', 'value'],
    data() {
        return {
            editor: null,
        };
    },
    watch: {
        editor(newValue) {
            if (this.onChange) {
                this.onChange(newValue);
            }
        },
    },
    mounted() {
        if (this.value) {
            this.editor = this.value;
        }
    },
};
</script>
