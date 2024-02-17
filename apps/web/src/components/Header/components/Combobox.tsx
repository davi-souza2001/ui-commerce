'use client'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import Image from 'next/image'
import { CheckIcon } from 'lucide-react'
import { useState } from 'react'
import { useGetProducts } from '@/api/endpoints'

export function Combobox() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const { data } = useGetProducts()

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-16 flex items-center justify-center"
        >
          <Image
            src="/assets/search.svg"
            alt="Search Icon"
            width={20}
            height={20}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandEmpty>No Product found.</CommandEmpty>
          <CommandGroup>
            {data?.products.map((product) => (
              <CommandItem
                key={product.id}
                value={product.name}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue)
                  setOpen(false)
                }}
              >
                {product.name}
                <CheckIcon
                  className={cn(
                    'ml-auto h-4 w-4',
                    value === product.name ? 'opacity-100' : 'opacity-0',
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
