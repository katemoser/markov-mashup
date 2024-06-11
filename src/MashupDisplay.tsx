
/** Display the mashed-up poem
 *
 * props: poem (string)
 *
 * TODO: Add in typewriting styling
 */
function MashupDisplay({ poem }: { poem: string }) {

    return (
        <div className="MashupDisplay">
            {poem}
        </div>
    );
}
export default MashupDisplay;