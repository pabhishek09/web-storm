# web-storm

video conferencing app built with webRtc

### Components

- Socketio Signalling server to exchange metadata as SDP
- ReactJS Frontend to implement P2P connection using RTCPeerConnection API
- Stun server (use free google stun servers) to identify the public network address behind NAT's
  Use https://github.com/coturn/coturn for a custom implementation


### How will this work

webRtc aims to simplify peer to peer communication by enabling realtime communication of audio, video and data.


Simple flow to establish P2P connection between clients A & B - 

- A creates a RTCPeerConnection object with stun server configurations
- A creates a session description object with RTCPeerConnection createOffer
- A sets the SDP on client with setLocalDescription
- A uses signalling server to send a connection request
- On receiving the signal, B calls setRemoteDescription with A's SDP 
- B creates a createAnswer and sets the answer in setLocalDescription on success callbackck
- B uses signalling server to send response to A
- A sets B answer as remote session decription using setRemoteDescription

Network exchange information between A & B - 

- A creates an RTCPeerConnection object with an oniceccanditate handler
- Handler is called  when network canditates become available
- In the handler, A sends stringified canditate data to B through the signalling server
- When B gets A data, addIceCanditate is called to set the remote peer description


## Next steps

- App : set up build scripts, create a dockerfile and add a nginx proxy
- Website design - Bulma ui-kit on figma
- Develop core webrtc components
- Identify plugins to be developed 
