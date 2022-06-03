import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Кто мы?
                  </h4>
                  <p className="m-0 text-sm">
                    Мы команда опытных трейдеров, которые уже успели за долгие годы (с 2014) обжечься на крипто-рынке. Мы все время совершенствуемся и разрабатываем новые методики для увеличения прибыльности нашей торговли, с чем бы и хотели поделиться с нашими подписчиками.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Как мы начинали?
                    </h4>
                  <p className="m-0 text-sm">
                    За первый месяц торговли нам удалось утроить свой капитал, это дало нам иллюзию того, что на рынке может заработать каждый! В следующий месяц мы потеряли весь депозит. В те времена мы не использовали никакие методы, торговали на весь депозит без стоплоссов и спускали всю свою зарплату на сделки.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Почему мы не сдались?
                    </h4>
                  <p className="m-0 text-sm">
                    В один прекрасный момент судьба свела моего друга с одним выдающимся трейдером еврооблигаций, который работал в одном из коммерческих банков. Он научил нас основным правилам игры и доказал, что на рынке можно зарабатывать, используя торговую стратегию, строго контролируя риски и придерживаясь дисциплины. С тех пор мы пришли к своему собственному походу, который дает нам неплохие результаты.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Наши методы?
                    </h4>
                  <p className="m-0 text-sm">
                 Наши методы торговли заключаются в использовании технического анализа, “on-chain” анализа, чтении торгового стакана и в тщательном подборе и обработке новостей рынка криптовалюты; фондового рынка и макроэкономической ситуации в мире.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Зачем нам это?
                    </h4>
                  <p className="m-0 text-sm">
                   У вас может возникнуть вопрос: зачем нам нужно делиться с вами методикой, которая приносит деньги? Дело в том, что выкладывая торговые стратегии и их результаты публично, мы чувствуем большую ответственность в принятии решений и получаем мотивацию для улучшения показателей эффективности нашей торговли. Для нас этот проект служит в главной степени стимулом к получению большей прибыли.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                   Кто наши клиенты ?
                    </h4>
                  <p className="m-0 text-sm">
                    Подписка на наш телеграмм канал подойдет, как для трейдера новичка, который не знает с чего начать изучение основ биржевой торговли, так и для профессионала, ищущего сигналы для входа в сделку и интересные паттерны на графиках. Мы расскажем, с чего лучше начать или как развить уже имеющиеся у тебя навыки трейдера и идти в ногу со временем и рынком.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;