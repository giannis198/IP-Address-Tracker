'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import arrowIcon from '../public/icon-arrow.svg'
import { getLocation } from '@/actions/get-location'

const formSchema = z.object({
  data: z.string().min(2).max(50)
})

const LocationInput = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      data: ''
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const location = await getLocation(values)
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(location)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='data'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-center text-white'>
                <h1 className='py-8 text-3xl'>Ip Address Tracker</h1>
              </FormLabel>
              <FormControl>
                <div className='flex'>
                  <Input
                    className=''
                    placeholder='Search for any IP address or domain'
                    {...field}
                  />
                  <Button className='' type='submit'>
                    <Image src={arrowIcon} alt='arrow' />
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default LocationInput
