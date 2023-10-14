export default function NumResult({ animes }) {
    return (
        <p className='search-results'>
            Founds <strong>{animes.length}</strong> results
        </p>
    );
}
