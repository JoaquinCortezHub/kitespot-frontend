"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";

type SearchBarProps = {
    onSearch: (searchQuery: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(searchQuery.trim() === "") return;
        onSearch(searchQuery.trim());
    };

    return(
        <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full mb-4">
            <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar spots..."
                className="w-full px-4 py-2 rounded-md border active:border-slate-600 "
            />
            <Button
                type="submit"
                variant={'outline'}
                className=" bg-white hover:bg-blue-500 hover:text-white transition-colors"
            >
                Buscar
            </Button>
        </form>
    );
}