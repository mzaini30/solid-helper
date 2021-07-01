import {createRenderEffect} from 'solid-js'

export const model = (elemen, value) => {
	const [field, setField] = value()
	createRenderEffect(() => elemen.value = field())
	elemen.addEventListener('input', x => setField(x.target.value))
}

export const modelObject = (elemen, value) => {
	const [field, setField, object] = value()
	createRenderEffect(() => elemen.value = field()[object])
	elemen.addEventListener('input', x => setField({[object]: x.target.value}))
}

export const modelCheckbox = (elemen, value) => {
	const [field, setField, item] = value()
	createRenderEffect(() => elemen.value = field()) /*bagian ini diubah*/
	elemen.addEventListener('change', x => {
		if (x.target.checked) {
			setField([...field(), item])
		} else {
			setField(field().filter(o => o !== item))
		}
	})
}