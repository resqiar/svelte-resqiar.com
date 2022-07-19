interface Props {
	/**
	 * Container or the element reference.
	 */
	ref: HTMLDivElement;
	/**
	 * 'left' to scroll to the left, 'right' to scroll to the right.
	 */
	direction: 'left' | 'right';
	/**
	 * The distance is how far the container performing scroll per click,
	 * this can be customized with the width of the card or item.
	 */
	distance: number;
}
/**
 * Scroll the container to the direction of the parameter.
 */
export default function scrollTo(props: Props) {
	if (props.direction == 'left') {
		props.ref.scrollBy({
			left: -props.distance,
			behavior: 'smooth',
		});
	} else {
		props.ref.scrollBy({
			left: props.distance,
			behavior: 'smooth',
		});
	}
}
