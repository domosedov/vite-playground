import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { DevTool } from '@hookform/devtools'
import * as Yup from 'yup'

type Inputs = Yup.InferType<typeof schema>

const schema = Yup.object({}).shape({
  title: Yup.string().required(),
  files: Yup.mixed<FileList>().test(
    'Check file',
    'Это поле обязательно',
    value => {
      return value ? value.length === 1 : false
    },
  ),
  cover: Yup.mixed<File>(),
})

export const Form: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    watch,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })

  const coverWatch = watch('cover')

  console.log(coverWatch)

  const onSubmit = handleSubmit(async inputs => {
    console.log(inputs)
  })

  return (
    <div className='p-4 bg-indigo-200'>
      <form onSubmit={onSubmit} className='space-y-4'>
        <div>
          <input
            type='text'
            {...register('title')}
            className='border border-black p-2'
          />
          {errors.title?.message && (
            <div className='text-red-500'>{errors.title?.message}</div>
          )}
        </div>
        <div>
          <input type='file' {...register('files')} />
          {errors.files?.message && <div>{errors.files.message}</div>}
        </div>
        <button className='bg-yellow-600 text-white px-4 py-2 rounded'>
          Submit
        </button>
      </form>
      <DevTool control={control} placement='top-right' />
    </div>
  )
}
