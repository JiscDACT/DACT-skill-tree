export function requireAll( requireContext:any ) {
    return requireContext.keys().map( requireContext );
}