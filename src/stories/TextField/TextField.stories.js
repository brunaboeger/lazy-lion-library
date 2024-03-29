import TextField from "@/components/Form/TextField.vue"

export default {
  title: 'Form/TextField',
  component: TextField,
  argTypes: {
    label: { 
      control: 'text',
      descrition: 'Label of the input field.',
     },
  },
  args: {
    label: 'Full Name',
    placeholder: 'Type your name...',
    value: '',
    helperText: 'Inform a full name.',
    icon: '',
    maxLength: 0,
    observations: 'This field is required.',
    disabled: false,
    required: false,
    isError: false,
  },
  parameters: {
    layout: 'centered',
  }
}

export const Default = {
  args: {
    icon: 'user',
    required: true,
  }
}

export const Focus = {
  args: {
    value: 'John Doe',
  }
}

export const Error = {
  args: {
    isError: true,
  }
}
