export interface ConcertInfo {
    Id: number,
    Artist: string,
    Name: string,
    Image: string
}

export const dummyConcerts: ConcertInfo[] = [
    {Id: 123, Artist: "Shania Twain", Name: "Queen of Me Tour", Image: "/event_images/stwain_queenofme.png"},
    {Id: 321, Artist: "Come From Away", Name: "The Broadway Musical", Image: "/event_images/comefromaway.jpg"}
];