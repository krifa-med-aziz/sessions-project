interface SearchBarProps {
    search : string;
    setSearch : (value : string) => void;
}

export default function SearchBar({search , setSearch} : SearchBarProps) {
    return (
        <div className="flex justify-center">
            <input
             value={search}
             onChange={(e) => {setSearch(e.target.value)}}
             type="text"
             className="w-1/3 px-5 py-3 rounded-full bg-gray-800"
             placeholder="search..."
            />
        </div>
    )
}