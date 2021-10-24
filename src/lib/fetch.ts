export interface FetchError<D = any> {
	status: number,
	statusText: string,
	data?: D
}

export interface FetchOptions {
	errorHandler?: (error: FetchError) => any
}

export class Fetch {
	constructor(private _baseUrl: string, private _opts?: FetchOptions ) {}
	
	private _handleError = (error: Response) => {
		const errorObject = {
			status: error.status,
			statusText: error.statusText,
			// data: await error.json()
		}

		if (this._opts?.errorHandler) return this._opts.errorHandler(errorObject)
		else return errorObject;
	}

	/**
	 * get
	 */
	public get = async <T>(url: string): Promise<T> => {
		try {
			const res = await fetch(`${this._baseUrl}/${url.startsWith('/') ? url.replace('/', '') : url}`, {
				method: 'GET',
			})

			if (!res.ok) throw res
	
			return await res.json()
		} catch (error) {
			return Promise.reject(this._handleError(error as Response))
		}
	}

	/**
	 * post
	 */
	public post = async <B, T>(url: string, body: B): Promise<T> => {
		try {
			const res = await fetch(`${this._baseUrl}/${url.startsWith('/') ? url.replace('/', '') : url}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body),
			})

			if (!res.ok) throw res
	
			return await res.json()
		} catch (error) {
			return Promise.reject(this._handleError(error as Response))
		}
	}
}
