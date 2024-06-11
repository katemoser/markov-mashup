
function MashupDisplay({ poem }: { poem: string }) {

    return (
        <div className="MashupDisplay">
            Here's the mashup:
            {poem}
        </div>
    );
}
export default MashupDisplay;