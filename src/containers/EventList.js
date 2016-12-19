// // @flow
// import React from 'react'
// import Event from './Event'
// import type { Events, Id } from '../types'

// export type Props = {
//   events: Events,
//   onEventClick: (id: Id) => void
// };

// const EventList = ({ events, onEventClick }: Props) => (
//   <ul>
//     {events.map(event =>
//       <Event
//         key={event.id}
//         {...event}
//         onClick={() => onEventClick(event.id)}
//       />
//     )}
//   </ul>
// )

// export default EventList
