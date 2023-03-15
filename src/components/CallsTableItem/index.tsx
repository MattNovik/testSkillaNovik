import './index.scss';
import { ReactComponent as IconArrow } from '../../assets/icons/icon-arrow-angle.svg';
import { ReactComponent as IconWorld } from '../../assets/icons/icon-world.svg';
import { ReactComponent as IconPhone } from '../../assets/icons/icon-phone.svg';
import { ReactComponent as IconTooltip } from '../../assets/icons/icon-tooltip.svg';
import { ReactComponent as IconPlay } from '../../assets/icons/icon-play.svg';
import { ReactComponent as IconStop } from '../../assets/icons/icon-stop.svg';
import { ReactComponent as IconDownload } from '../../assets/icons/icon-download.svg';
import ApiAudio from '../../Api/ApiAudio';
import { useState, useRef, useEffect } from 'react';

const CallsTableItem = ({
  checked,
  type,
  time,
  user,
  number,
  source,
  mark,
  sound,
  index,
}: {
  checked: { id: string | undefined; checkedValue: boolean | undefined };
  type: string | undefined;
  time: number | Date;
  user: string | undefined;
  number: { type: string; telNumber: string | number | undefined };
  source: { title: string | undefined; link: string | undefined };
  mark: number | string | undefined;
  sound: { time: number; link: string | undefined; id: any };
  index: number;
}) => {
  const [checkedInput, setCheckedInput] = useState<any>(checked.checkedValue);
  const refAudio = useRef<any>();
  const [loadedAudioStatus, setLoadedAudioStatus] = useState<boolean>(false);
  const [playState, setPlayState] = useState<boolean>(false);
  const [audioUrl, setAudioUrl] = useState<any>();
  const dateTimeRight =
    new Date(time).getMinutes() < 10
      ? '0' + new Date(time).getMinutes()
      : new Date(time).getMinutes();
  const dateTimeLeft =
    new Date(time).getHours() < 10
      ? '0' + new Date(time).getHours()
      : new Date(time).getHours();
  const dateTime = dateTimeLeft + ':' + dateTimeRight;
  const durationTimeLeft =
    sound.time > 59
      ? Math.floor(sound.time / 60) < 10
        ? '0' + Math.floor(sound.time / 60)
        : Math.floor(sound.time / 60)
      : '00';
  const durationTimeRight =
    sound.time % 60 !== 0 && sound.time % 60 < 10
      ? '0' + (sound.time % 60)
      : sound.time % 60 !== 0
      ? sound.time % 60
      : '00';
  const durationTime = durationTimeLeft + ':' + durationTimeRight;

  const downloadAudio = (link: any, id: any) => {
    ApiAudio.getRecord(`record=${link}&partnership_id=${id}`)
      .then((response) => {
        console.log(response);
        const url = window.URL.createObjectURL(new Blob([response.data]));
        setAudioUrl(url);
        setLoadedAudioStatus(true);
        /* console.log(url);
        const audio = document.createElement('audio');
        audio.src = url;
        const link = document.createElement('a');
        link.href = url;
        audio.appendChild(link);
        audio.setAttribute('autoplay', 'false');
        document.body.appendChild(audio); */
        /* link.setAttribute('download', 'record.mp3'); //or any other extension
        document.body.appendChild(link);
        link.click(); */
      })
      .catch((error) => {
        setLoadedAudioStatus(false);
        console.log(error);
      });
  };

  useEffect(() => {
    setCheckedInput(checked.checkedValue);
  }, [checked]);
  return (
    <div
      className={
        playState || checkedInput
          ? 'calls-table-item calls-table-item--active'
          : 'calls-table-item'
      }
    >
      <div className="calls-table-item__checkbox checkbox-block">
        <input
          className="checkbox-custom visibility-hidden"
          id={checked.id}
          type="checkbox"
          checked={checkedInput}
          onChange={() => {
            setCheckedInput(!checkedInput);
          }}
        />
        <label className="checkbox-custom-label" htmlFor={checked.id}></label>
      </div>
      <div className="calls-table-item__type type-block">
        <IconArrow className={type === 'Дозвонился' ? 'green' : 'blue'} />
      </div>
      <div className="calls-table-item__time time-block">{dateTime}</div>
      <div className="calls-table-item__user user-block">
        <img src={user} alt="no" />
      </div>
      <div className="calls-table-item__call call-block">
        <IconWorld className="calls-table-item__call-world-icon" />
        <IconPhone className="calls-table-item__call-phone-icon" />
        <a href={`tel:${String(number.telNumber)}`}>{number.telNumber}</a>
      </div>
      <div className="calls-table-item__source source-block">
        {source.title}
      </div>
      <div className="calls-table-item__mark mark-block">
        {index % 4 === 0 ? (
          <>
            {mark}
            <button className="calls-table-item__get-info" type="button">
              Распознать
            </button>
          </>
        ) : index % 5 === 0 ? (
          <div className="calls-table-item__mark-list-wrapper">
            <div className="calls-table-item__mark-list calls-table-item__mark-list--perfect">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="calls-table-item__mark-mark calls-table-item__mark-mark--perfect">
              Отлично
            </div>
            <div className="calls-table-item__mark-tooltip">
              <IconTooltip />
            </div>
          </div>
        ) : index % 3 === 0 ? (
          <div className="calls-table-item__mark-list-wrapper">
            <div className="calls-table-item__mark-list calls-table-item__mark-list--good">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="calls-table-item__mark-mark calls-table-item__mark-mark--good">
              Хорошо
            </div>
            <div className="calls-table-item__mark-tooltip">
              <IconTooltip />
            </div>
          </div>
        ) : index % 7 === 0 ? (
          <div className="calls-table-item__mark-list-wrapper">
            <div className="calls-table-item__mark-list calls-table-item__mark-list--bad">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="calls-table-item__mark-mark calls-table-item__mark-mark--bad">
              Плохо
            </div>
            <div className="calls-table-item__mark-tooltip">
              <IconTooltip />
            </div>
          </div>
        ) : null}
      </div>
      <div className="calls-table-item__duration duration-block">
        {sound.time > 0 ? (
          <>
            <div className="calls-table-item__duration-out">{durationTime}</div>
            <div className="calls-table-item__duration-audio">
              {durationTime}
              {!playState ? (
                <button
                  type="button"
                  className="calls-tabel-item__play-audio"
                  aria-label="play"
                  disabled={!loadedAudioStatus}
                  onClick={() => {
                    refAudio.current.play();
                    setPlayState(true);
                  }}
                >
                  <IconPlay />
                </button>
              ) : (
                <button
                  type="button"
                  className="calls-tabel-item__stop-audio"
                  aria-label="stop"
                  disabled={!loadedAudioStatus}
                  onClick={() => {
                    refAudio.current.pause();
                    setPlayState(false);
                  }}
                >
                  <IconStop />
                </button>
              )}
              <div className="progress">
                <progress
                  id="progress"
                  value={
                    refAudio.current && refAudio.current.currentTime
                      ? Math.floor(
                          refAudio.current.currentTime /
                            refAudio.current.duration
                        ) * 100
                      : 0
                  }
                  onChange={(e) => console.log(e)}
                  max="100"
                >
                  <span id="progress-bar"></span>
                </progress>
              </div>
              <button
                aria-label="download"
                className={
                  loadedAudioStatus
                    ? 'calls-tabel-item__download-audio calls-tabel-item__download-audio--loaded'
                    : 'calls-tabel-item__download-audio'
                }
                type="button"
                onClick={() => downloadAudio(sound.link, sound.id)}
              >
                <IconDownload />
              </button>
              {audioUrl ? (
                <audio
                  ref={refAudio}
                  className="calls-table-item__audio-custom visibility-hidden"
                  src={audioUrl}
                  controls={true}
                ></audio>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default CallsTableItem;
