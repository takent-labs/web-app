"use client"

import { SearchField } from '@heroui/react'

function Header() {
    return (
        <header className="flex items-center max-w-8xl bg-background/90 backdrop-blur-md mx-auto p-8 sticky justify-center w-full top-0 z-50">
            <div className="w-[500px]">
                <SearchField fullWidth name="search">
                    <SearchField.Group className='w-full bg-secondary rounded-xl h-10'>
                        <SearchField.SearchIcon className='text-primary/60' />
                        <SearchField.Input className="w-full flex-1 bg-secondary px-4" placeholder="Buscar..." />
                        <SearchField.ClearButton className='text-primary/60 hover:text-primary' />
                    </SearchField.Group>
                </SearchField>
            </div>
        </header>
    )
}

export default Header

