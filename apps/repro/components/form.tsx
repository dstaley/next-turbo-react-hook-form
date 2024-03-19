import { useFormContext } from '@web/react-components/src/components/marketo-form'

export default function Form() {
	const form = useFormContext()
	return (
		<div>
			<p>Form state</p>
			<pre>
				<code>{JSON.stringify(form, null, 2)}</code>
			</pre>
		</div>
	)
}
