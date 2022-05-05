import { useRecoilValue } from "recoil"
import { playlistState } from "../atoms/playlistAtoms"
import { Song } from "./Song"

export const Songs = () => {

    const playlist = useRecoilValue( playlistState ) 

    return (
        <div className="text-white p-8 flex flex-col space-y-1 pb-28">
            {
                playlist?.tracks?.items?.map(( {track}, index ) => (
                    <Song key={ track.id } track={ track } order={ index } />
                ))
            }
        </div>
    )
}

