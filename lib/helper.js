import {createRenderEffect} from 'solid-js'

export const model = (elemen, value) => {
	const [field, setField] = value()
	createRenderEffect(() => elemen.value = field())
	elemen.addEventListener('input', x => setField(x.target.value))
}