import { getImgUrlOptionalSize } from './utils.js';

function Avatar({ person, size }) {
  let avatarSize = 's';
  if (size > 90) {
    avatarSize === 'b'
  }
  return (
    <img
      className="avatar"
      src={getImgUrlOptionalSize(person, avatarSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div className="profile">
      <Avatar
        size={40}
        person={{
          name: 'Gregorio Y. Zara',
          imageId: '7vQD0fP'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Gregorio Y. Zara',
          imageId: '7vQD0fP'
        }}
      />
      <Avatar
        size={120}
        person={{
          name: 'Gregorio Y. Zara',
          imageId: '7vQD0fP'
        }}
      />
    </div>
  );
}
