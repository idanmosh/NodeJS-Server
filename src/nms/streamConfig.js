const config = {
    rtmp_server: {
        rtmp: {
            port: 1935,
            chunk_size: 1028,
            gop_cache: true,
            ping: 5,
            ping_timeout: 5
          },
          http: {
            port: 8000,
            mediaroot: './media',
            allow_origin: '*'
          },
          trans: {
            ffmpeg: '/usr/bin/ffmpeg',
            tasks: [
              {
                app: 'live',
                hls: true,
                hlsFlags: '[hls_time=0.5:hls_list_size=1:hls_flags=delete_segments]',
                dash: true,
                dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
              }
            ]
        }
    }
};

module.exports = config;