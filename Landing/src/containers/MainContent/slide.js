import React, { Component } from 'react';
import { Carousel, CarouselItem,CarouselCaption  } from 'reactstrap';


const items = [
    {
        altText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        caption: 'Slide 1',
        
    },
    {
        altText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        caption: 'Slide 2'
    },
    {
        altText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        caption: 'Slide 3'
    }
];

class Slide extends Component {

    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src} >
                         <CarouselCaption  captionText={item.altText} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <React.Fragment>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous} >
                    {slides}
    
                </Carousel>
            </React.Fragment>
        );
    }
}

export default Slide;   